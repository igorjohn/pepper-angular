import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { FuseAlertService } from '@fuse/components/alert';


import { interval, Subscription, Observable } from 'rxjs';

@Component({
    selector: 'forms-layouts',
    templateUrl: './layouts.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./checkout-styles.css']
})






export class FormsLayoutsComponent implements OnInit {



    centered = false;
    disabled = false;
    unbounded = false;


    loading = false;

    plans: any[];

    badgeIcons: any[];
    headerImages: any[];
    sideImages: any[];
    testimonials: any[];


    countdownSettings: any[];

    orderBumps: any[];


    cardInstallments: any[];


    planBillingForm: UntypedFormGroup;


    /**
     * Constructor
     */
    constructor(
        private _formBuilder: UntypedFormBuilder,
        private _fuseAlertService: FuseAlertService,

    ) {

    }



    progressbarValue = 100;
    curSec: number = 0;
    countDown: Subscription;
    counter = 300;
    tick = 1000;

    progressbarDisplayValue = 100;
    display: any;
    progress: number;
    total: number;

    timer(minute) {
        let seconds: number = minute * 60;
        let textSec: any = '0';
        let statSec: number = 60;

        const prefix = minute < 10 ? '0' : '';

        const timer = setInterval(() => {
            seconds--;
            if (statSec != 0) statSec--;
            else statSec = 59;

            if (statSec < 10) {
                textSec = '0' + statSec;
            } else textSec = statSec;

            this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;
            this.progressbarDisplayValue = (seconds * 100) / (minute * 60);

            //console.log(this.progress)

            if (seconds == 0) {
                clearInterval(timer);
            }


            this.progress = this.progressbarDisplayValue;
            if (!this.progress) {
                this.progress = 0;
            }
            //if we don't have a total aka no requirement, it's 100%.
            if (this.total === 0) {
                this.total = this.progress;
            } else if (!this.total) {
                this.total = 100;
            }
            //if the progress is greater than the total, it's also 100%.
            if (this.progress > this.total) {
                this.progress = 100;
                this.total = 100;
            }
            this.progress = (this.progress / this.total) * 100;

        }, 1000);
    }


    OnPurchase(): void {
        this.loading = true;
    }


    OnShowNotification(name: string): void {
        setTimeout(() => {
            // Show notification
            this.show(name);

            // Dismiss
            setTimeout(() => { this.dismiss(name) }, 5000)

        }, 6000);
    }


    ngOnInit(): void {

        this.timer(2);

        // Show notification
        this.OnShowNotification('notification1');

        this.countdownSettings = [{
            timeleft: 180,
            bgColor: '#dc2626',
            svgColor: '#fedf27',
            textColor: '#f7f7f7',

            // text
            initialText: 'Compre logo ou vá embora!',
            stopText: 'Essa oportunidade vai expirar.'
        }];


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



        this.orderBumps = [

            {
                productId: 133,
                offerId: 123,
                productName: 'Curso de Gastronomia 2.0',
                productImg: 'https://imagem.natelinha.uol.com.br/grande/AnonymusGourmet.jpg',
                fakePrice: 899.90,
                price: 97.00,
                heading: 'Seja um Chef Foda!',
                sub: 'Compre este curso e aprenda todas as receitas que você sempre quis. Para amadores e profissionais que desejam aprender dotes culinários e crescer seu negócio.'
            },

            {
                productId: 133,
                offerId: 123,
                productName: 'Curso VOCÊ ELETRICISTA',
                productImg: 'https://3.bp.blogspot.com/-KzjacI58wy4/WJEgEP3PpJI/AAAAAAAAD-U/U9gupdo_pyo-wU8ujLT2kIngrZ_LTMH7gCLcB/s640/CAPA-390x260.jpg',
                fakePrice: 297,
                price: 49.9,
                heading: 'Conquiste uma nova profissão, com renda de até R$ 8.998,97',
                sub: 'Aprenda tudo que você precisa para se tornar o eletricista que o mercado precisa.'
            }

        ]



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


        /* CHECKOUT HEADER IMAGES */
        this.headerImages = [
            {
                url: 'https://eibneti.com.br/wp-content/uploads/2020/12/banner-curso-de-redes-3.png',
                width: 'w-full'
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


    /* Alerts */
    /**
     * Dismiss the alert via the service
     *
     * @param name
     */
    dismiss(name: string): void {
        this._fuseAlertService.dismiss(name);
    }

    /**
     * Show the alert via the service
     *
     * @param name
     */
    show(name: string): void {
        this._fuseAlertService.show(name);
    }


}
