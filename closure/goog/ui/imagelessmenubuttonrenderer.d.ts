declare module goog.ui {

    /**
     * Custom renderer for {@link goog.ui.MenuButton}s. Imageless buttons can
     * contain almost arbitrary HTML content, will flow like inline elements, but
     * can be styled like block-level elements.
     *
     * @deprecated These contain a lot of unnecessary DOM for modern user agents.
     *     Please use a simpler button renderer like css3buttonrenderer.
     * @constructor
     * @extends {goog.ui.MenuButtonRenderer}
     * @final
     */
    class ImagelessMenuButtonRenderer extends goog.ui.MenuButtonRenderer {
        constructor();
        
        /**
         * Default CSS class to be applied to the root element of components rendered
         * by this renderer.
         * @type {string}
         */
        static CSS_CLASS: string;
        
        /**
         * Returns true if this renderer can decorate the element.  Overrides
         * {@link goog.ui.MenuButtonRenderer#canDecorate} by returning true if the
         * element is a DIV, false otherwise.
         * @param {Element} element Element to decorate.
         * @return {boolean} Whether the renderer can decorate the element.
         * @override
         */
        canDecorate(element: Element): boolean;
        
        /**
         * Takes a text caption or existing DOM structure, and returns the content
         * wrapped in a pseudo-rounded-corner box.  Creates the following DOM structure:
         *  <div class="goog-inline-block goog-imageless-button">
         *    <div class="goog-inline-block goog-imageless-button-outer-box">
         *      <div class="goog-imageless-button-inner-box">
         *        <div class="goog-imageless-button-pos-box">
         *          <div class="goog-imageless-button-top-shadow">&nbsp;</div>
         *          <div class="goog-imageless-button-content
         *                      goog-imageless-menubutton-caption">Contents...
         *          </div>
         *          <div class="goog-imageless-menubutton-dropdown"></div>
         *        </div>
         *      </div>
         *    </div>
         *  </div>
        
         * Used by both {@link #createDom} and {@link #decorate}.  To be overridden
         * by subclasses.
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to wrap
         *     in a box.
         * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
         * @return {!Element} Pseudo-rounded-corner box containing the content.
         * @override
         */
        createButton(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;
        
        /**
         * Check if the button's element has a box structure.
         * @param {goog.ui.Button} button Button instance whose structure is being
         *     checked.
         * @param {Element} element Element of the button.
         * @return {boolean} Whether the element has a box structure.
         * @protected
         * @override
         */
        hasBoxStructure(button: goog.ui.Button, element: Element): boolean;
        
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }
}
