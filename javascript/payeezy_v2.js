var Payeezy = (function (){
	
		function getCardType(number) {
	        var cards = {
	            visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
	            mastercard: /^5[1-5][0-9]{14}$/,
	            amex: /^3[47][0-9]{13}$/,
	            diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
	            discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
	            jcb: /^(?:2131|1800|35\d{3})\d{11}$/
	        };
	        for (var card in cards) {
	            if (cards[card].test(number)) {
	                return card;
	            }
	        }
	    }
	
	function getFormData() {
		var formData = [];
		var inputElements = document.getElementsByTagName('input');
		var selectElements = document.getElementsByTagName('select');
		for(i=0; i<inputElements.length;i++) {
			var element = inputElements[i];
			var name = element.getAttribute('payeezy-data') 
			if (name) {
				formData[name] = element.value;
			}
		}
		for(i=0; i<selectElements.length;i++) {
			var element = selectElements[i];
			var name = element.getAttribute('payeezy-data') 
			if (name) {
				formData[name] = element.value;
			}
		}
		return formData;
	}
	

	return {
		createToken : function(callback) {
			var host = 'api-cert.payeezy.com';
			this['clientCallback'] = callback;
			var formData = getFormData();
			var status =0;
			var result = {};
			var i=0;
			var messageArray = [];
			if (!this.apikey) {
				status = 400;
				messageArray[i] = {description : 'Please set the API Key'};
				i++;
			}
			if (!this.mercId) {
				status = 400;
				messageArray[i] = {description : 'Please set the Merchant Identifier'};
			}
			
			if (messageArray.length > 0) {
				result['error'] = {messages : messageArray};
				callback(status, result);
				return false;
			}
			var endpoint = 'https://'+host+'/v1/securitytokens?apikey='+this.apikey+'&trtoken='+this.mercId+'&callback=Payeezy.callback&type=FDToken&auth='+formData['auth']+'&ta_token='+formData['ta_token']+'&credit_card.type='+formData['card_type']+'&credit_card.cardholder_name='+formData['cardholder_name']+'&credit_card.card_number='+formData['cc_number']+'&credit_card.exp_date='+formData['exp_month']+formData['exp_year']+'&credit_card.cvv='+formData['cvv_code'];
			
			var scriptTag = document.createElement('script');
			scriptTag.src = endpoint;
			
			document.getElementsByTagName('head')[0].appendChild(scriptTag);
		},
		setApiKey : function(apiKey) {
			this['apikey'] = apiKey;
		},
		setMerchantIdentifier : function(mercId) {
			this['mercId'] = mercId;
		},
		callback : function (response) {
			this['clientCallback'](response.status, response.results);
		}
	};
})();

