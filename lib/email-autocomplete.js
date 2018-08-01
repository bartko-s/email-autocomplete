const DOMAINS = [
        // global domains
        'aol.com', 'hotmail.com', 'gmail.com', 'facebook.com', 'yahoo.com', 'icloud.com',

        // SK domain
        'atlas.sk', 'azet.sk', 'centrum.sk', 'chello.sk', 'hotmail.sk', 'inmail.sk',
        'mail.t-com.sk', 'netkosice.sk', 'orangemail.sk', 'pobox.sk', 'post.sk',
        'slovanet.sk', 'stonline.sk', 'szm.sk', 'upcmail.sk', 'zoznam.sk',

        // CZ domain
        'centrum.cz', 'email.cz', 'seznam.cz',
    ];

export function search(term) {
    let parts = term.split('@', 2);

    if(parts.length < 2 || parts[0].length === 0 || parts[1].length === 0) {
        return [];
    } else {
        let matches = DOMAINS.filter(function(item) {
            return item.match(new RegExp('^'+parts[1], 'i')) !== null;
        });

        return matches.map(function(item) {
            return parts[0]+'@'+item;
        }).sort();
    }
}