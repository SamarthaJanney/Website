//Tableau Embed function
function initViz() {
    url = "https://public.tableau.com/views/OpportunityTracking_15941015782510/OpportunityTracking2?:language=en&:display_count=y&publish=yes&:origin=viz_share_link",
    options = {
        hideToolbar: true,
     
     
    };
    viz = new tableau.Viz(tabMonthlySales, url, options);

    url = "https://public.tableau.com/views/OpportunityTracking_15941015782510/OpportunityTracking?:language=en&:retry=yes&:display_count=y&:origin=viz_share_link",
    options = {
        hideToolbar: true,
        
       
    };
    viz = new tableau.Viz(tabopportunity, url, options);
  }