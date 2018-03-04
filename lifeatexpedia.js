console.log('Node works!');

var express = require('express');

var app = express();

var server = app.listen(10484, listening);

app.use(express.static('lifeatexpedia'));

function listening()
{
		
	var url = 'https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel';
	var request = require('request');
	var response = require('response');

	var getJSON = require('get-json');
	var htmlResult = '';
	
}

app.get('/loadAll',getDestinationName);
app.get('/search/:searchValue',seachDestinationName);


function seachDestinationName(request, response)
{
	var myData;
	var search = request.params;
	
	var url = 'https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel';
	var request = require('request');	
	var getJSON = require('get-json');
	var bodyResult;
			
	var getJSON = require('get-json');
	var htmlResult = '';
	
	getJSON(url, function(error, response1){ 
	
		var offerInfo = response1.offerInfo;
		var hotelInfo = response1.hotelInfo;
		var profile = response1;
		
		var listItem = '';
				
		profile.offers.Hotel.forEach(function(obj){ 
			//htmlResult = htmlResult + '<span>Destination: ' + obj.destination.longName + '</span>' + ';<span>Hotel Name:' + obj.hotelInfo.hotelName + '<br/>'
						
			if(obj.hotelInfo.hotelName.toLowerCase().indexOf(search.searchValue.toLowerCase()) > -1 || 
			   obj.hotelInfo.hotelDestination.toLowerCase().indexOf(search.searchValue.toLowerCase()) > -1 ||
			   obj.hotelInfo.hotelDestinationRegionID.toLowerCase().indexOf(search.searchValue.toLowerCase()) > -1 || 			   
			   String(obj.hotelInfo.hotelReviewTotal).indexOf(search.searchValue) > -1 ||
			   String(obj.hotelPricingInfo.averagePriceValue).indexOf(search.searchValue) > -1 ||
			   String(obj.hotelPricingInfo.originalPricePerNight).indexOf(search.searchValue) > -1 ||
			   String(obj.hotelInfo.hotelGuestReviewRating).indexOf(search.searchValue) > -1 ||
			   String(obj.hotelInfo.hotelReviewTotal).indexOf(search.searchValue) > -1 ||			   
			   obj.hotelInfo.hotelLongDestination.toLowerCase().indexOf(search.searchValue.toLowerCase()) > -1 || search.searchValue == '')
			{
				listItem = '<li class="hotel item-order__list-item js_co_item" ><article itemscope="itemscope" itemtype="http://schema.org/Hotel" id="js_item_' +
				obj.hotelInfo.hotelId
				+ '" class="item bg-white" data-has-gallery="1" data-is-available="1" data-category="5" data-liking-index="5" data-liking="85">';
				
				listItem = listItem + '<div class="pos-relative item__wrapper"><div class="item__image-area"><div class="item__image-wrapper pos-relative"><img class="item__image item__image--has-gallery" decoding="async" src="' +
				obj.hotelInfo.hotelImageUrl
				+ '" alt="' +
				obj.hotelInfo.hotelName
				+ '" itemprop="photo">';
				
				listItem = listItem + '<button type="button" class="item__image--gallery-entry item__slideout-toggle" tabindex="-1"><span class="image__text-wrapper"><span class="image__text">View images</span></span></button></div></div><div class="item__flex-column"><div class="item__details"><div itemprop="name" class="item__name m-0 jsheadline  item__name--5-star"><h3 class="name__copytext m-0 item__slideout-toggle" title="' +
				obj.hotelInfo.hotelName
				+ '" dir="ltr">' +
				obj.hotelInfo.hotelName
				+ '</h3></div>';
				
				listItem = listItem + '<div class="item__location ov-hidden item__slideout-toggle map js_button_map_5839254"><p class="details__paragraph">' +
				obj.hotelInfo.hotelDestination
				+ ', <span class="item__distance">' +
				obj.hotelInfo.hotelDestinationRegionID + ', ' + obj.hotelInfo.hotelLongDestination 
				+ '</span></p></div>';
				
				listItem = listItem + '<div itemprop="aggregateRating" itemscope="itemscope" itemtype="http://schema.org/AggregateRating" class="item__review item__slideout-toggle"><meta itemprop="worstRating" content="0"><meta itemprop="ratingCount" content="' + 
				obj.hotelInfo.hotelReviewTotal
			+ '"><meta itemprop="bestRating" content="10"><div class="rating-box rating-box--color-5" style="width:50px;"><span itemprop="ratingValue" class="rating-box__value">' +
			obj.hotelInfo.hotelGuestReviewRating
				+ '</span></div><p class="details__paragraph"><em class="item__rating-number fs-normal"></em><span class="review__count"> (' + 
				obj.hotelInfo.hotelReviewTotal
				+ ' reviews)</span></p></div></div>';	

				listItem = listItem + '<section class="item__deal-best" itemprop="makesOffer" itemscope="itemscope" itemtype="http://schema.org/Offer"><div itemprop="priceSpecification" itemscope="itemscope" itemtype="http://schema.org/PriceSpecification" role="link" class="item__deal-best-link js_item_bestprice js_co_link reduced" data-item="' +
				obj.hotelInfo.hotelId
				+ '" onclick="return true;" data-id="' +
				obj.hotelInfo.hotelId
				+ '" data-link="c9ZXS&amp;X:.Y7Yba01/=AKpSzKFkpOx3BKN%lKQ7JtVMVJVS/zrtJAxt:pJtEpIIo:In/HGxRuwn/utt3uxx/oKI:CVRoMGVMJJweLx8f/J3V&amp;NNVMx3extN7RIQowVt3KtxAJtS/KM4E8M4f?JtVGxRtDVGBVGNZ0x4:Ls3SNI8QNVM:zVN/DK1VoMPF?G4xpJ4J/VVUEGNfHMNjANxjtMxg:L48GsINVrJMNJx3QxeMJJ6o0NQMJxn4tsOBrt3ZGLtoHrxYGt8RVrSNFxJIoIexQJIE0N7prNQe0xS%lK%lK" data-bestprice="' +
				obj.hotelPricingInfo.averagePriceValue
				+ '" data-co_li_lo="1"><button type="button" tabindex="-1" class="item__flag font-tiny fw-bold fs-normal ta-center trv-maincolor-03 font-bright cur-pointer--hover flag--deal-best">‎-' +
				obj.hotelPricingInfo.percentSavings
				+ '%</button><div class="item__best-details"><div><em class="item__deal-best-ota block fs-normal cur-pointer--hover"></em><meta itemprop="maxPrice" content="' +
				obj.hotelPricingInfo.originalPricePerNight
				+ '"><meta itemprop="minPrice" content="' +
				obj.hotelPricingInfo.averagePriceValue
				+ '"><s class="item__strikethrough-price block"> $' +
				obj.hotelPricingInfo.originalPricePerNight
				+ ' </s><strong class="item__best-price mb-gutter-half price_min">$' +
				obj.hotelPricingInfo.averagePriceValue
				+ '</strong></div></div><button class="btn btn--deal btn--regular icon-bg-icn_arrow_deal fl-trailing">View Deal</button></div></section></div></div><div class="item__slideout"><div class="slo-wrp clearfix" id="js_slideout_5839254"></div></div></article></li>';		
				
				//console.log('item: ' + listItem);
				htmlResult = htmlResult + listItem;
			}
		});
		response.send(htmlResult);
	});
}
function getDestinationName(request, response)
{		
	var myData;

	var url = 'https://offersvc.expedia.com/offers/v2/getOffers?scenario=deal-finder&page=foo&uid=foo&productType=Hotel';
	var request = require('request');	
	var getJSON = require('get-json');
	var bodyResult;
	
	var getJSON = require('get-json');
	var htmlResult = '';
	
	getJSON(url, function(error, response1){ 
		var offerInfo = response1.offerInfo;
		var hotelInfo = response1.hotelInfo;
		var profile = response1;
		
		var listItem = '';
				
		profile.offers.Hotel.forEach(function(obj){ 
			//htmlResult = htmlResult + '<span>Destination: ' + obj.destination.longName + '</span>' + ';<span>Hotel Name:' + obj.hotelInfo.hotelName + '<br/>'
			
			listItem = '<li class="hotel item-order__list-item js_co_item" ><article itemscope="itemscope" itemtype="http://schema.org/Hotel" id="js_item_' +
			obj.hotelInfo.hotelId
			+ '" class="item bg-white" data-has-gallery="1" data-is-available="1" data-category="5" data-liking-index="5" data-liking="85">';
			
			listItem = listItem + '<div class="pos-relative item__wrapper"><div class="item__image-area"><div class="item__image-wrapper pos-relative"><img class="item__image item__image--has-gallery" decoding="async" src="' +
			obj.hotelInfo.hotelImageUrl
			+ '" alt="' +
			obj.hotelInfo.hotelName
			+ '" itemprop="photo">';
			
			listItem = listItem + '<button type="button" class="item__image--gallery-entry item__slideout-toggle" tabindex="-1"><span class="image__text-wrapper"><span class="image__text">View images</span></span></button></div></div><div class="item__flex-column"><div class="item__details"><div itemprop="name" class="item__name m-0 jsheadline  item__name--5-star"><h3 class="name__copytext m-0 item__slideout-toggle" title="' +
			obj.hotelInfo.hotelName
			+ '" dir="ltr">' +
			obj.hotelInfo.hotelName
			+ '</h3></div>';
			
			listItem = listItem + '<div class="item__location ov-hidden item__slideout-toggle map js_button_map_5839254"><p class="details__paragraph">' +
			obj.hotelInfo.hotelDestination
			+ ', <span class="item__distance">' +
			obj.hotelInfo.hotelDestinationRegionID + ', ' + obj.hotelInfo.hotelLongDestination 
			+ '</span></p></div>';
			
			listItem = listItem + '<div itemprop="aggregateRating" itemscope="itemscope" itemtype="http://schema.org/AggregateRating" class="item__review item__slideout-toggle"><meta itemprop="worstRating" content="0"><meta itemprop="ratingCount" content="' + 
			obj.hotelInfo.hotelReviewTotal
			+ '"><meta itemprop="bestRating" content="10"><div class="rating-box rating-box--color-5" style="width:50px;"><span itemprop="ratingValue" class="rating-box__value">' +
			obj.hotelInfo.hotelGuestReviewRating
			+ '</span></div><p class="details__paragraph"><em class="item__rating-number fs-normal"></em><span class="review__count"> (' + 
			obj.hotelInfo.hotelReviewTotal
			+ ' reviews)</span></p></div></div>';	

			listItem = listItem + '<section class="item__deal-best" itemprop="makesOffer" itemscope="itemscope" itemtype="http://schema.org/Offer"><div itemprop="priceSpecification" itemscope="itemscope" itemtype="http://schema.org/PriceSpecification" role="link" class="item__deal-best-link js_item_bestprice js_co_link reduced" data-item="' +
			obj.hotelInfo.hotelId
			+ '" onclick="return true;" data-id="' +
			obj.hotelInfo.hotelId
			+ '" data-link="c9ZXS&amp;X:.Y7Yba01/=AKpSzKFkpOx3BKN%lKQ7JtVMVJVS/zrtJAxt:pJtEpIIo:In/HGxRuwn/utt3uxx/oKI:CVRoMGVMJJweLx8f/J3V&amp;NNVMx3extN7RIQowVt3KtxAJtS/KM4E8M4f?JtVGxRtDVGBVGNZ0x4:Ls3SNI8QNVM:zVN/DK1VoMPF?G4xpJ4J/VVUEGNfHMNjANxjtMxg:L48GsINVrJMNJx3QxeMJJ6o0NQMJxn4tsOBrt3ZGLtoHrxYGt8RVrSNFxJIoIexQJIE0N7prNQe0xS%lK%lK" data-bestprice="' +
			obj.hotelPricingInfo.averagePriceValue
			+ '" data-co_li_lo="1"><button type="button" tabindex="-1" class="item__flag font-tiny fw-bold fs-normal ta-center trv-maincolor-03 font-bright cur-pointer--hover flag--deal-best">‎-' +
			obj.hotelPricingInfo.percentSavings
			+ '%</button><div class="item__best-details"><div><em class="item__deal-best-ota block fs-normal cur-pointer--hover"></em><meta itemprop="maxPrice" content="' +
			obj.hotelPricingInfo.originalPricePerNight
			+ '"><meta itemprop="minPrice" content="' +
			obj.hotelPricingInfo.averagePriceValue
			+ '"><s class="item__strikethrough-price block"> $' +
			obj.hotelPricingInfo.originalPricePerNight
			+ ' </s><strong class="item__best-price mb-gutter-half price_min">$' +
			obj.hotelPricingInfo.averagePriceValue
			+ '</strong></div></div><button class="btn btn--deal btn--regular icon-bg-icn_arrow_deal fl-trailing">View Deal</button></div></section></div></div><div class="item__slideout"><div class="slo-wrp clearfix" id="js_slideout_5839254"></div></div></article></li>';		
			
			//console.log('item: ' + listItem);
			htmlResult = htmlResult + listItem;
		});
		response.send(htmlResult);
	});
	
}