/*
 * MiniPreview v0.9
 *
 * @author  Will Boyd
 * Shared by Codegena
 */

function makePreview(x) {
    if (x.matches) { // If media query matches
        (function($) {
            var PREFIX = 'mini-preview';
            
            // implemented as a jQuery plugin
            $.fn.miniPreview = function(options) {
                return this.each(function() {
                    var $this = $(this);
                    var miniPreview = $this.data(PREFIX);
                    if (miniPreview) {
                        miniPreview.destroy();
                    }
        
                    miniPreview = new MiniPreview($this, options);
                    miniPreview.generate();
                    $this.data(PREFIX, miniPreview);
                });
            };
            
            var MiniPreview = function($el, options) {
                this.$el = $el;
                this.$el.addClass(PREFIX + '-anchor');
                this.options = $.extend({}, this.defaultOptions, options);
                this.counter = MiniPreview.prototype.sharedCounter++;
            };
            
            MiniPreview.prototype = {
                sharedCounter: 0,
                
                defaultOptions: {
                    width: 480,
                    height: 800,
                    scale: 0.85,
                    prefetch: 'pageload'
                },
                        
                generate: function() {
                    this.createElements();
                    this.setPrefetch();
                },
        
                createElements: function() {
                    var $wrapper = $('<div>', { class: PREFIX + '-wrapper' });
                    var $loading = $('<div>', { class: PREFIX + '-loading' });
                    var $frame = $('<iframe>', { class: PREFIX + '-frame' });
                    var $cover = $('<div>', { class: PREFIX + '-cover' });
                    $wrapper.appendTo(this.$el).append($loading, $frame, $cover);
                    
                    // sizing
                    $wrapper.css({
                        width: this.options.width + 'px',
                        height: this.options.height + 'px'
                    });
                    
                    // scaling
                    var inversePercent = 100 / this.options.scale;
                    $frame.css({
                        width: inversePercent + '%',
                        height: inversePercent + '%',
                        transform: 'scale(' + this.options.scale + ')'
                    });
        
                    // positioning
                    var fontSize = parseInt(this.$el.css('font-size').replace('px', ''), 10)
                    var top = (this.$el.height() + fontSize) / 2;
                    var left = (this.$el.width());
                    $wrapper.css({
                        top: top + 'px',
                        // left: left + 'px',
                        right: '0px'
                    });
                },
                
                setPrefetch: function() {
                    switch (this.options.prefetch) {
                        case 'pageload':
                            this.loadPreview();
                            break;
                        case 'parenthover':
                            this.$el.parent().one(this.getNamespacedEvent('mouseenter'),
                                this.loadPreview.bind(this));
                            break;
                        case 'none':
                            this.$el.one(this.getNamespacedEvent('mouseenter'),
                                this.loadPreview.bind(this));
                            break;
                        default:
                            throw 'Prefetch setting not recognized: ' + this.options.prefetch;
                            break;
                    }
                },
                
                loadPreview: function() {
                    var f = this.$el.find('.' + PREFIX + '-frame')
                    f.css('opacity', '0');
                    f.attr('src', this.$el.attr('href'))
                    f.attr('scrolling', "no")
                    f.on('load', function() {
                        f.contents().find('header.site-header,footer.article-footer').hide()
                        f.css('background-color', '#fff');
                        f.css('opacity', '1');
                    });
                },
                
                getNamespacedEvent: function(event) {
                    return event + '.' + PREFIX + '_' + this.counter;
                },
        
                destroy: function() {
                    this.$el.removeClass(PREFIX + '-anchor');
                    this.$el.parent().off(this.getNamespacedEvent('mouseenter'));
                    this.$el.off(this.getNamespacedEvent('mouseenter'));
                    this.$el.find('.' + PREFIX + '-wrapper').remove();
                }
            };
        })(jQuery);
    }
}

var x = window.matchMedia("(min-width: 781px)")

makePreview(x)

x.addListener(makePreview)