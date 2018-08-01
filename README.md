# Email Autocomplete

[![Donate on PayPal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://paypal.me/stevo4) 
 
[Online DEMO](https://email-autocomplete.stefanbartko.sk/)

Simple helper which help you add email autocompletion of popular email domain to your mail input fields.

## Installation

`npm install email-autocomplete --save`

## Usage
- ES2015 module import
```
import * as EmailAutocomplete from 'email-autocomplete';

let suggestedAddreses = EmailAutocomplete.search("test@gm");
```

- load via script tag
```
<script src="dist/email-autocomplete.min.js"></script>

let suggestedAddreses = EmailAutocomplete.search("test@gm");    
```

- use UNPKG CDN
```
 todo example
```

## Example usage with jQueryUI autocomplete
```
$('#email-input').autocomplete({
    minLength: 3,
    source: function (request, response) {
        response(EmailAutocomplete.search(request.term));
    }
});
```
