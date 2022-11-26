import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';


@Component({
    selector: 'forms-layouts',
    templateUrl: './layouts.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [`
    
    .mat-form-field.mat-form-field-appearance-fill .mat-form-field-wrapper{
        margin-bottom:0;
    }

    `]
})






export class FormsLayoutsComponent implements OnInit {

    plans: any[];

    badgeIcons: any[];
    sideImages: any[];
    testimonials: any[];


    cardInstallments: any[];


    planBillingForm: UntypedFormGroup;

    convertStringToInt(str: any) {
        var Num = parseInt(str);
        return Num;
    }


    /**
     * Constructor
     */
    constructor(
        private _formBuilder: UntypedFormBuilder
    ) {

    }


    ngOnInit(): void {

        // Create the form
        this.planBillingForm = this._formBuilder.group({

            name: [''],
            mail: [''],
            phone: [''],
            doc: [''],
            cardholder: [''],

            cardNumber: [''],
            cardExpiration: [''],
            cardCVC: [''],

            installments: ['1x'],
            plan: ['card'],

        });



        this.cardInstallments = [

            {
                value: '1x',
                installment: 197
            },
            {
                value: '2x',
                installment: 101.45
            },
            {
                value: '3x',
                installment: 69.65
            },
            {
                value: '4x',
                installment: 53.80
            },
            {
                value: '5x',
                installment: 44.33
            },
            {
                value: '6x',
                installment: 38.04
            },
            {
                value: '7x',
                installment: 33.58
            },
            {
                value: '8x',
                installment: 30.27
            },
            {
                value: '9x',
                installment: 27.71
            },
            {
                value: '10x',
                installment: 25.68
            },
            {
                value: '11x',
                installment: 24.04
            },
            {
                value: '12x',
                installment: 22.70
            },


        ]


        /* CHECKOUT BADGES */
        this.badgeIcons = [

            {
                icon: 'shield-check',
                title: 'Dados protegidos',
                text: 'Os seus dados são confidenciais e seguros.'
            },

            {
                icon: 'lock-closed',
                title: 'Checkout 100% seguro',
                text: 'As informações desta compra são criptografadas.'
            }

        ];


        /* CHECKOUT TESTIMONIALS */
        this.testimonials = [
            {
                name: 'João da silva',
                text: 'Produto muito bom, resolveu minha vida em apenas 1 semana. Indico sem medo!',
                img: 'https://avatars.githubusercontent.com/u/38533411?v=4',
                rate: 4
            }
        ]


        /* CHECKOUT SIDE IMAGES */
        this.sideImages = [

            {
                url: 'https://www.criptofacil.com/wp-content/uploads/2020/12/nubank-usa-sergio-mallandro-para-ironizar-pegadinhas-pix-1.jpg',
                width: 'w-full'
            },

            {
                url: 'https://flaviamelissa.com.br/wp-content/uploads/selo-garantia-incondicional-7-dias.png',
                width: 'w-2/4'
            }

        ]


        // Setup the plans
        this.plans = [
            {
                value: 'card',
                label: 'Cartão',
                icon: `https://pepper.com.br/checkout/assets/svg/pay-card.svg`,
            },
            {
                value: 'pix',
                label: 'PIX',
                icon: `https://pepper.com.br/checkout/assets/svg/pay-pix.svg`,
            },

            {
                value: 'billet',
                label: 'Boleto',
                icon: `https://img.icons8.com/external-flat-icons-inmotus-design/67/null/external-barcode-barcode-flat-icons-inmotus-design-3.png`,
            },



        ];
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }


}
