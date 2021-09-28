/**
 █▒▓▒░ The FlowPaper Project

 This file is part of FlowPaper.

 FlowPaper is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, version 3 of the License.

 FlowPaper is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with FlowPaper.  If not, see <http://www.gnu.org/licenses/>.

 For more information on FlowPaper please see the FlowPaper project
 home page: https://flowpaper.com
 */

jQuery(function() {
    /**
     * Handles the event of external links getting clicked in the document.
     *
     * @example onExternalLinkClicked("http://www.google.com")
     *
     * @param String link
     */
    jQuery('#documentViewer').bind('onExternalLinkClicked',function(e,link){
        if(link.indexOf('mailto:')==0){
            window.parent.location.href = link;
        }else if(!FLOWPAPER.LinkTarget || (FLOWPAPER.LinkTarget && FLOWPAPER.LinkTarget == 'New window')){
            if (window.eb && window.eb.platform && window.eb.platform.touchonlydevice) {
                if (window != window.top) { // in a iframe
                    window.parent.location.href = link;
                } else { // loaded as parent
                    document.location.href = link;
                }
            } else {
                var newWindow = window.open(link, '_flowpaper_exturl');

                if (FLOWPAPER.blockedNewWindow(newWindow)) {
                    document.location.href = link;
                }
            }
        }else if(FLOWPAPER.LinkTarget){
            if(FLOWPAPER.LinkTarget == 'Full window'){
                window.parent.location.href = link;
            }

            if(FLOWPAPER.LinkTarget == 'Same window'){
                window.location.href = link;
            }
        }

        // record the Google Analytics event
        TrackFlowPaperEvent(jQuery(this).data('TrackingNumber'),jQuery(this).data('TrackingDocument'),'External Link Clicked',link,null);
    });

    /**
     * Handles the event of videos being played in the document.
     *
     * @example onVideoStarted("http://youtube.com/abc")
     *
     * @param String video url
     */
    jQuery('#documentViewer').bind('onVideoStarted',function(e,videoProps){
        // record the Google Analytics event
        TrackFlowPaperEvent(jQuery(this).data('TrackingNumber'),jQuery(this).data('TrackingDocument'),'Video Started',videoProps.VideoUrl,videoProps.PageNumber);
    });

    
    /**
     * Handles the event of audios being played in the document.
     *
     * @example onAudioStarted("http://url/mp3")
     *
     * @param String audio url
     */
    jQuery('#documentViewer').bind('onAudioStarted',function(e,audioProps){
        // record the Google Analytics event
        TrackFlowPaperEvent(jQuery(this).data('TrackingNumber'),jQuery(this).data('TrackingDocument'),'Audio Started',audioProps.AudioUrl,audioProps.PageNumber);
    });    


    /**
     * Handles the event of the original document being downloaded.
     *
     * @example onDownloadDocument("https://mydomain.com/abc.pdf")
     *
     * @param String pdf url
     */
    jQuery('#documentViewer').bind('onDownloadDocument',function(e,pdfUrl){
        // record the Google Analytics event
        TrackFlowPaperEvent(jQuery(this).data('TrackingNumber'),jQuery(this).data('TrackingDocument'),'Document Downloaded',pdfUrl,null);
    });

    /**
     * Recieves progress information about the document being loaded
     *
     * @example onProgress( 100,10000 );
     *
     * @param int loaded
     * @param int total
     */
    jQuery('#documentViewer').bind('onProgress',function(e,loadedBytes,totalBytes){

    });

    /**
     * Handles the event of a document is in progress of loading
     *
     */
    jQuery('#documentViewer').bind('onDocumentLoading',function(e){

    });

    /**
     * Handles the event of a document is in progress of loading
     *
     */
    jQuery('#documentViewer').bind('onPageLoading',function(e,pageNumber){

    });

    /**
     * Receives messages about the current page being changed
     *
     * @example onCurrentPageChanged( 10 );
     *
     * @param int pagenum
     */
    jQuery('#documentViewer').bind('onCurrentPageChanged',function(e,pagenum){
        // if GANumber is supplied then lets track this as a Google Analytics event.
        if(jQuery(this).data('TrackingNumber')){
            var trackingDoc     = jQuery(this).data('TrackingDocument');
            var pagelocation    = (document.location.pathname.indexOf('.html')>-1?document.location.pathname.substr(0,document.location.pathname.lastIndexOf('.html'))+'/':document.location.pathname)+'#page='+pagenum;

            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', jQuery(this).data('TrackingNumber'), 'auto', 'FlowPaperEventTracker');
            ga('FlowPaperEventTracker.set', 'page', pagelocation);
            ga('FlowPaperEventTracker.send', 'pageview');
        }
    });

    /**
     * Receives messages about the document being loaded
     *
     * @example onDocumentLoaded( 20 );
     *
     * @param int totalPages
     */
    jQuery('#documentViewer').bind('onDocumentLoaded',function(e,totalPages){

    });

    /**
     * Receives messages about the page loaded
     *
     * @example onPageLoaded( 1 );
     *
     * @param int pageNumber
     */
    jQuery('#documentViewer').bind('onPageLoaded',function(e,pageNumber){

    });

    /**
     * Receives messages about the page loaded
     *
     * @example onErrorLoadingPage( 1 );
     *
     * @param int pageNumber
     */
    jQuery('#documentViewer').bind('onErrorLoadingPage',function(e,pageNumber){

    });

    /**
     * Receives error messages when a document is not loading properly
     *
     * @example onDocumentLoadedError( "Network error" );
     *
     * @param String errorMessage
     */
    jQuery('#documentViewer').bind('onDocumentLoadedError',function(e,errMessage){

    });

    /**
     * Receives error messages when a document has finished printed
     *
     * @example onDocumentPrinted();
     *
     */
    jQuery('#documentViewer').bind('onDocumentPrinted',function(e,numPages){

    });

    /**
     * Handles the event of a pdf requiring a password
     *
     * @example onPasswordNeeded(updatePassword,reason)
     *
     * @param updatePassword callback function for setting the password
     */
    jQuery('#documentViewer').bind('onPasswordNeeded',function(e,updatePassword){

    });
});