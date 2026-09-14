/**
 * ====================================================================
 * Husky Bot config
 * ====================================================================
 * Davet linklerini veya destek sunucusu adresini değiştirmek istediğinizde
 * yalnızca aşağıdaki değişkenleri güncellemeniz yeterlidir. Sitedeki tüm
 * ilgili butonlar ve bağlantılar otomatik olarak buradan beslenir.
 */

const CONFIG = {
    // Discord Bot invite Link
    botInvite: "https://discord.com/oauth2/authorize?client_id=1531753467264241994&permissions=8&scope=bot%20applications.commands",

    // Discord Support server Link
    supportServer: "https://discord.gg/Y2tC6UpRnw"
};

// apply link in page
(function applyConfig() {
    window.CONFIG = CONFIG;

    function updateElements() {
        // data-link="botInvite" veya data-link="bot-invite"
        const botInviteElements = document.querySelectorAll('[data-link="botInvite"], [data-link="bot-invite"]');
        botInviteElements.forEach(el => {
            if (el.tagName.toLowerCase() === 'a') {
                el.href = CONFIG.botInvite;
                el.rel = "noopener noreferrer";
            }
        });

        // data-link="supportServer" veya data-link="support-server"
        const supportElements = document.querySelectorAll('[data-link="supportServer"], [data-link="support-server"]');
        supportElements.forEach(el => {
            if (el.tagName.toLowerCase() === 'a') {
                el.href = CONFIG.supportServer;
                el.rel = "noopener noreferrer";
            }
        });
    }

    // Tıklama anında da kontrol ederek linkin anında açılmasını garantiye alır
    document.addEventListener('click', function (e) {
        const target = e.target.closest('a[data-link]');
        if (!target) return;
        const linkType = target.getAttribute('data-link');
        if (linkType === 'botInvite' || linkType === 'bot-invite') {
            target.href = CONFIG.botInvite;
        } else if (linkType === 'supportServer' || linkType === 'support-server') {
            target.href = CONFIG.supportServer;
        }
    });

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", updateElements);
    } else {
        updateElements();
    }
})();
