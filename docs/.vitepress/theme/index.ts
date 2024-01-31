// @ts-ignore: 2307
import { h } from 'vue' 
import DefaultTheme from 'vitepress/theme'
import type { Theme as ThemeConfig } from 'vitepress'

import type { Options } from '@nolebase/vitepress-plugin-enhanced-readabilities'
import { InjectionKey } from '@nolebase/vitepress-plugin-enhanced-readabilities'


import {
    NolebaseEnhancedReadabilitiesMenu,
    NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities'
import '@nolebase/vitepress-plugin-enhanced-readabilities/dist/style.css'


import {
    NolebaseHighlightTargetedHeading,
} from '@nolebase/vitepress-plugin-highlight-targeted-heading'
import '@nolebase/vitepress-plugin-highlight-targeted-heading/dist/style.css'


export const Theme: ThemeConfig = {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // A enhanced readabilities menu for wider screens
            'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
            // A enhanced readabilities menu for narrower screens (usually smaller than iPad Mini)
            'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
            // vitepress-plugin-highlight-targeted-heading
            'layout-top': () => [
                h(NolebaseHighlightTargetedHeading),
            ], 
        })
    },
    enhanceApp({ app }) {
        app.provide(InjectionKey, {
            spotlight: {
                defaultToggle: true,
            }
        } as Options) 
    }
}
export default Theme