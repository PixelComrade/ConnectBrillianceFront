

angular.module('starter.services.pay', [])

    .factory('Payment', function($http) {

        var transformRequestAsFormPost = function() {

            function transformRequest( data, getHeaders ) {
                var headers = getHeaders();
                headers["Content-type"] = "application/x-www-form-urlencoded; charset=utf-8";

                headers["X-PAYPAL-SECURITY-USERID"] = "wxbh_api1.hack.com";
                headers["X-PAYPAL-SECURITY-PASSWORD"] = "1406348042";
                headers["X-PAYPAL-SECURITY-SIGNATURE"] = "AHFbToTScZm9mlhLyNw3SHwgLkL1AFbtVmcqHVIG37KRPiX2N7Tpmidh";
                headers["X-PAYPAL-REQUEST-DATA-FORMAT"] = "NV";
                headers["X-PAYPAL-RESPONSE-DATA-FORMAT"] = "NV";
                headers["X-PAYPAL-APPLICATION-ID"] = "APP-80W284485P519543T";//     #Standard Sandbox App ID
                
                return( serializeData( data ) );
            }
            // Return the factory value.
            return( transformRequest );

            function serializeData( data ) {

                // If this is not an object, defer to native stringification.
                if ( ! angular.isObject( data ) ) {
                    return( ( data == null ) ? "" : data.toString() );
                }

                var buffer = [];

                // Serialize each key in the object.
                for ( var name in data ) {
                    if ( ! data.hasOwnProperty( name ) ) {
                        continue;
                    }

                    var value = data[ name ];

                    buffer.push(
                            encodeURIComponent( name ) +
                            "=" +
                            encodeURIComponent( ( value == null ) ? "" : value )
                    );
                }
                // Serialize the buffer and clean it up for transportation.
                var source = buffer
                        .join( "&" )
                        .replace( /%20/g, "+" )
                    ;
                return( source );
            }
        }();


        return {
            preparePayment: function(paymentData, cb) {
                console.log(paymentData);
                $http.post("https://svcs.sandbox.paypal.com/AdaptivePayments/Pay ", paymentData,
                    {transformRequest: transformRequestAsFormPost}
                ).success(function(data, status) {
                        console.log(data);
                        cb(null, data);
                    }).
                    error(function(data, status) {
                        console.log('error occurred:' + data);
                        cb(data, null);
                    });
            }

        }
    });
