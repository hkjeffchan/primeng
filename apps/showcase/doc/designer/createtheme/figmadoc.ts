import { AppCodeModule } from '@/components/doc/app.code.component';
import { AppDocModule } from '@/components/doc/app.doc.module';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'figma-doc',
    standalone: true,
    imports: [CommonModule, AppCodeModule, AppDocModule, RouterModule],
    template: `<app-docsectiontext>
        <p>
            The <a routerLink="/uikit">Figma UI Kit</a> and the theming api is fully synchorized, meaning the design tokens in Figma map to the CSS variables in the code. The mapping is created via the
            <a href="https://tokens.studio/" target="_blank" rel="noopener noreferrer">Token Studio</a> at Figma which allows exporting a single json file. The Designer is able to interpret this file and transform it to an actual theme. In case your
            UI Kit version is older, the transformation process marks the missing tokens and recommends an auto migration via the migration assistant. This is an automated workflow and eliminates the manual design to code during the handoff process.
            If you have UI designers in your team, the recommended approach is using Figma for the actual design process and utilizing the designer for transformation, preview and download purposes.
        </p>
        <b class="mb-4 block">Export JSON file</b>
        <p>
            Open the <a routerLink="/uikit">PrimeOne UI Kit</a> in which you've modified tokens. In the Tokens Studio plugin, navigate to the <i>Tools</i> menu and select <i>Export to file/folder.</i> When the Export tokens modal appears, make sure
            the <i>Single file</i> tab is selected. Check the <i>All tokens sets</i> option, then click <i>Export</i>.
        </p>
        <p>In case you utilize custom tokens, create a new token set named <i>custom</i> and define your tokens under this set to make sure they are also exported to the theme code.</p>
        <div class="pl-8 pr-4 pt-4 bg-surface-0 dark:bg-surface-900 rounded-2xl border border-surface mb-4" style="max-width: 48rem">
            <img alt="Designer Dashboard" src="https://primefaces.org/cdn/designer/tokens-studio.png" class="w-full" />
        </div>
        <b class="mb-4 block">Import to Designer</b>
        <p>Choose the <i>Import Figma Tokens</i> option when creating a new theme at Theme Designer and import the json file.</p>
        <div class="pl-8 pr-4 pt-4 bg-surface-0 dark:bg-surface-900 rounded-2xl border border-surface mb-4" style="max-width: 48rem">
            <img alt="Designer Dashboard" src="https://primefaces.org/cdn/designer/guide-create.png" class="w-full" />
        </div>
        <b class="mb-4 block">Video Tutorial</b>
        <p>
            A tutorial is available demonstrating how the handoff process can be automated between the design team and the development team. The video demonstrates the feature from the PrimeVue version, which is exactly same as the PrimeNG
            implementation.
        </p>
        <div class="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Ktocmi2dLLM?si=lG7JwkUfLTQFlfeX" frameborder="0" allowfullscreen></iframe>
        </div>
    </app-docsectiontext>`
})
export class FigmaDoc {}
