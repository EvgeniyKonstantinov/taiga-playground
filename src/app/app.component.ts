import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {TuiButton, TuiCalendar, TuiDataList, TuiDropdown, TuiFlagPipe, TuiIcon, TuiTextfield} from '@taiga-ui/core';
import {TuiLanguageSwitcherService} from '@taiga-ui/i18n/utils';
import type {TuiCountryIsoCode, TuiLanguageName} from '@taiga-ui/i18n/types';
import { TuiButtonSelect, TuiTile } from '@taiga-ui/kit';
import { NgForOf, TitleCasePipe } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app',
    imports: [TuiIcon, TuiCalendar, TuiButton, TuiFlagPipe, TuiTile,         NgForOf,
        ReactiveFormsModule,
        TitleCasePipe,
        TuiButton,
        TuiButtonSelect,
        TuiDataList,
        TuiDropdown,
        TuiFlagPipe,
        TuiTextfield,
],
    templateUrl: './app.component.html',
    styleUrl: './app.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    protected readonly switcher = inject(TuiLanguageSwitcherService);
    protected readonly language = new FormControl(capitalize(this.switcher.language));
 
    protected open = false;
 
    public readonly flags = new Map<TuiLanguageName, TuiCountryIsoCode>([
        ['belarusian', 'BY'],
        ['chinese', 'CN'],
        ['dutch', 'NL'],
        ['english', 'GB'],
        ['french', 'FR'],
        ['german', 'DE'],
        ['hebrew', 'IL'],
        ['italian', 'IT'],
        ['japan', 'JP'],
        ['kazakh', 'KZ'],
        ['korean', 'KR'],
        ['malay', 'MY'],
        ['polish', 'PL'],
        ['portuguese', 'PT'],
        ['russian', 'RU'],
        ['spanish', 'ES'],
        ['turkish', 'TR'],
        ['ukrainian', 'UA'],
        ['vietnamese', 'VN'],
    ]);
 
    public readonly names: TuiLanguageName[] = Array.from(this.flags.keys());
 
    public setLang(lang: TuiLanguageName): void {
        this.language.setValue(lang);
        this.switcher.setLanguage(lang);
        this.open = false;
    }

}

function capitalize(value: string): string {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}