$s = jQuery.noConflict();


//the function gets the query data from localize script
//it ties an event listener to the load more button
//that brings more of the 'block-{block}' type from part/blocks

//also exposes a function that lets you dynamically change the query
// so can combine filtering loadmore qoth ajax

const update_wp_query = (function () {


    let query = myloadmoreParams.query;
    const block = myloadmoreParams.block;
    let maxPage = myloadmoreParams.max_page;
    let currentPage = myloadmoreParams.current_page;
    const listContainer = $s(`.block-${block}`).parent();
    const loadMoreBtn = $s('.my-loadmore-btn');


    if (currentPage >= maxPage) loadMoreBtn.hide();


    //updates the query with ajax, using data of submitted form
    function update_query(form) {

        console.log('HERE')

        let newParams = {}
        let elements = form.elements;
        for (const el of elements) {
            newParams[el.name] = el.value

        }

        $s.ajax({
            url: myloadmoreParams.ajaxurl, // AJAX handler
            data: {
                action: 'modifyQueryPublicationsQuery',
                query: query,
                ...newParams
            },
            type: 'POST',
            // beforeSend: function (xhr) {
            //     button.text('Loading...'); // change the button text, you can also add a preloader image
            // },
            success: function (res) {

                let response = JSON.parse(res)

                listContainer.empty();
                listContainer.append(response.output);
                currentPage = 1;
                maxPage = response.max_page;
                query = response.new_query;

                if (currentPage >= maxPage) {
                    loadMoreBtn.hide();
                } else {

                    loadMoreBtn.show()
                }


                // $s(`.block-${block}`).last().after(response);
                // if (currentPage == maxPage) _this.hide();
            }
        });
    }

    //sets even listener for load more button
    $s('.my-loadmore-btn').click(function (e) {

        e.preventDefault();
        let _this = $s(this);
        if (++currentPage > maxPage) {
            return;
        }
        $s.ajax({
            url: myloadmoreParams.ajaxurl, // AJAX handler
            data: {
                action: 'loadmore',
                query: query,
                page: currentPage,
                block: block,
            },
            type: 'POST',
            // beforeSend: function (xhr) {
            //     button.text('Loading...'); // change the button text, you can also add a preloader image
            // },
            success: function (response) {

                console.log(response)


                $s(`.block-${block}`).last().after(response);
                if (currentPage == maxPage) _this.hide();
                //update search results shown for search results page ??
            }
        });
    });

    return update_query;
})();



