# Payeezy bindings for WebBased app

Sample code that demonstrates Payeezy JS Integration.
*	Current version for merchants domiciled in US – v5.1 (US)
*	Current version for non-US domiciled merchants – v5.1 (Intl)

The sample code demonstrates how to get a token while performing a $0 auth and address verification. The $0 auth and address verification are optional. If $0 authorization is not desired, use auth=false in the tokenization call. If address verification is not desired, simply remove the address fields from the tokenization call in your implementation.

# How to run the sample code (sample html)? Or integrate with Payeezy.js file ?

1. Click on [payeezy_js repo](https://github.com/payeezy/payeezy_js) and click on "Download ZIP" or "Clone in Desktop" button. Goto example folder and click on index html file to run the sample. 

2. In case if you are downloading js and html separately then Keep both *.js and *.html files in one directory on your local file system. Open web browser and run the index.html file. Please see the guideline for browser compatibility.

3. After you click on "Generate token" button, you will see inline response from payeezy server.  

4. Use token value for Authorize and/or Purchase payments and reversal transactions(Capture/void/refund). For more details on transactions API, visit [Payeezy - Docs & Sandbox ](https://developer.payeezy.com/apis)

#How does Payeezy.js works ?

![alt tag](https://github.com/nohup-atulparmar/payeezy_js/raw/master/ignore/PayeezyJS_GetToken.png)

1. Payeezy.js (which is included on the page using a &lt; script> tag) intercepts the form submit, and then
asynchronously posts the credit card details to Payeezy. This call uses JSONP over https, passing in API key and an
identifier– trtoken. Both of these values are provisioned for the merchant‘s developer via the developer portal.
2. On success Payeezy returns a token (type=FDtoken) to payeezy.js. Failure messages are returned in the response,
which can be handled as appropriate.
3. Payeezy.js then submits the form with the primary and secondary transactions as shown in the diagram above.

For more details on 'Payeezy JS' example refer [payeezy_js example](../../tree/master/example)

For more details on 'Payeezy JS Guide' refer [payeezy_js guide](../../blob/master/guide/payeezy_js070115.pdf)

## Contributing

1. Fork it 
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request  

## Feedback
We appreciate the time you take to try out our sample code and welcome your feedback. Here are a few ways to get in touch:
* For generally applicable issues and feedback, create an issue in this repository.
* support@payeezy.com - for personal support at any phase of integration
* [1.855.799.0790](tel:+18557990790)  - for personal support in real time 

## Terms of Use

Terms and conditions for using Payeezy JavaScript: Please see [Payeezy Terms & conditions](https://developer.payeezy.com/terms-use)
 
### License
The Payeezy JavaScript is open source and available under the MIT license. See the LICENSE file for more info.
