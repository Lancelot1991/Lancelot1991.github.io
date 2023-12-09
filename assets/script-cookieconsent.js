import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v3.0.0-rc.17/dist/cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "bar inline",
            position: "bottom",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        }
    },
    language: {
        default: "en",
        autoDetect: "document",
        translations: {
            en: {
                consentModal: {
                    title: "Hello traveller, it's cookie time!",
                    description: "We use cookies to improve your experience, is you keep browsing, we will assume that you agree to our <a href=\"/en/legal/cookies-policy.html\">",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Manage preferences",
                    footer: "<a href=\"#link\">Privacy Policy</a>\n<a href=\"#link\">Terms and conditions</a>"
                },
                preferencesModal: {
                    title: "Consent Preferences Center",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    closeIconLabel: "Close modal",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Cookie Usage",
                            description: "When you visit any website, information from your browser is saved, generally through the use of cookies. This data may be about you, your preferences, or your device, and is primarily used to improve your user experience. The information is generally anonymous and serves to create a more personalized web experience. We respect your right to privacy, so you can choose which cookies we use. Click the category headings to learn more or change our default settings. Please note that blocking some types of cookies may affect your experience and the services we can offer you."
                        },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "These cookies are necessary for the website to function and cannot be disabled on our systems. They are usually set to respond to actions you take to receive services, such as adjusting your privacy preferences, logging into the site, or filling out forms. You can set your browser to block or alert you to the presence of these cookies, but some parts of the website will not function. These cookies do not store any personally identifiable information.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "More information",
                            description: "For any query in relation to my policy on cookies and your choices, please contact us."
                        }
                    ]
                }
            },
            es: {
                consentModal: {
                    title: "¡Hola viajero, es la hora de las galletas!",
                    description: "Utilizamos cookies para mejorar tu experiencia. Si continúas navegando, asumimos que aceptas la<a href=\"/es/legal/politica-cookies.html\">política de cookies</a>.",
                    acceptAllBtn: "Aceptar todo",
                    acceptNecessaryBtn: "Rechazar todo",
                    showPreferencesBtn: "Gestionar preferencias",
                    footer: "<a href=\"#link\">Política de privacidad</a>\n<a href=\"#link\">Términos y condiciones</a>"
                },
                preferencesModal: {
                    title: "Preferencias de Consentimiento",
                    acceptAllBtn: "Aceptar todo",
                    acceptNecessaryBtn: "Rechazar todo",
                    savePreferencesBtn: "Guardar preferencias",
                    closeIconLabel: "Cerrar modal",
                    serviceCounterLabel: "Servicios",
                    sections: [
                        {
                            title: "Uso de Cookies",
                            description: "Cuando visitas cualquier sitio web se guarda información de tu navegador, generalmente, mediante el uso de cookies. Estos datos pueden ser acerca de ti, de tus preferencias o sobre tu dispositivo, y se usan principalmente para mejorar tu experiencia de usuario. Por lo general, la información tiene carácter anónimo y sirve para crear una experiencia web más personalizada. Respetamos tu derecho a la privacidad, por lo que puedes escoger qué cookies usamos. Haz clic en los encabezados de cada categoría para saber más o cambiar nuestras configuraciones predeterminadas. Ten en cuenta que el bloqueo de algunos tipos de cookies puede afectar tu experiencia y los servicios que te podemos ofrecer."
                        },
                        {
                            title: "Cookies Estrictamente Necesarias <span class=\"pm__badge\">Siempre Habilitado</span>",
                            description: "Estas cookies son necesarias para que el sitio web funcione y no se pueden desactivar en nuestros sistemas. Usualmente están configuradas para responder a acciones hechas por usted para recibir servicios, tales como ajustar sus preferencias de privacidad, iniciar sesión en el sitio, o llenar formularios. Usted puede configurar su navegador para bloquear o alertar la presencia de estas cookies, pero algunas partes del sitio web no funcionarán. Estas cookies no guardan ninguna información personal identificable.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Más información",
                            description: "Para cualquier duda con respecto a la política de cookies, puede ponerse en contacto con nosotros y haremos lo posible para resolverla."
                        }
                    ]
                }
            },
            ca: {
                consentModal: {
                    title: "Hola, viatger, és l'hora de les galetes!",
                    description: "Fem servir cookies per millorar la teva experiència. Si continues navegant, assumim que accepta la <a href=\"/legal/politica-cookies.html\">política de cookies</a>.",
                    acceptAllBtn: "Acceptar tot",
                    acceptNecessaryBtn: "Rebutjar tot",
                    showPreferencesBtn: "Gestionar les preferències",
                    footer: "<a href=\"/legal/politica-confidencialitat.html\">Política de confidencialitat</a>"/*\n<a href=\"#link\">Termes et conditions</a>*/
                },
                preferencesModal: {
                    title: "Preferències de cookies",
                    acceptAllBtn: "Acceptar tot",
                    acceptNecessaryBtn: "Rebutjar tot",
                    savePreferencesBtn: "Guarda les preferències",
                    closeIconLabel: "Tancar modal",
                    serviceCounterLabel: "Services",
                    sections: [
                        {
                            title: "Us de les cookies",
                            description: "Quan visiteu qualsevol lloc web es desa informació del vostre navegador, generalment, mitjançant l'ús de cookies. Aquestes dades poden ser sobre tu, les teves preferències o sobre el dispositiu, i s'utilitzen principalment per millorar la teva experiència d'usuari. En general, la informació té caràcter anònim i serveix per crear una experiència web més personalitzada. Respectem el teu dret a la privadesa, per la qual cosa pots escollir quines cookies fem servir. Fes clic a les capçaleres de cada categoria per saber-ne més o canviar les nostres configuracions predeterminades. Tingues en compte que el bloqueig d'alguns tipus de galetes pot afectar la teva experiència i els serveis que et podem oferir."
                        },
                        {
                            title: "Cookies estrictament necessàries<span class=\"pm__badge\">Sempre habilitat</span>",
                            description: "Aquestes cookies són necessàries perquè el lloc web funcioni i no es poden desactivar als nostres sistemes. Usualment estan configurades per respondre a accions fetes per vostè per rebre serveis, com ara ajustar les seves preferències de privadesa, iniciar sessió al lloc, o omplir formularis. Podeu configurar el vostre navegador per bloquejar o alertar la presència d'aquestes galetes, però algunes parts del lloc web no funcionaran. Aquestes galetes no guarden cap informació personal identificable.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Més informació",
                            description: "Per qualsevol dubte referent a la política de cookies, pots posar-te en contacte amb nosaltres i farem el possible per resoldre'l."
                        }
                    ]
                }
            }
        }
    }
});