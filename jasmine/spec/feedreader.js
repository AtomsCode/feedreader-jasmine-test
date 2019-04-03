
$(function() {
  /* a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {

    //make sure that the allFeeds variable has been defined and that it is notempty.
    it('All Feeds are defined & Not Empty', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* a test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */

    // Test (expect) # 1 Check For url Define
    // Test (expect) # 2 Check For url not empty
    it('All Links are defined & Not Empty', function() {
      allFeeds.forEach(function(Feed) {
        expect(Feed.url).toBeDefined();

        // can be perfromed also as following expect((Feed.url).length).toBeGreaterThan(0);
        expect(Feed.url).not.toEqual("");
      });
    });

    /* a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */

    // Test (expect) # 1 Check For name Define
    // Test (expect) # 2 Check For name not empty
    it('All Name are defined & Not Empty', function() {
      allFeeds.forEach(function(Feed) {
        expect(Feed.name).toBeDefined();

        // can be perfromed also as following expect((Feed.name).length).toBeGreaterThan(0);
        expect(Feed.name).not.toEqual("");
      });
    });

  });

  /*a new test suite named "The menu" */
  describe('The menu', function() {
    //a test that ensures the menu element is hidden by default.
    it('Menu Element is hidden by Default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    /* a test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
    it('Menu changes visibility when menu is clicked', function() {
      //Check when the menu icon is clicked
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(false);

      //Check when the menu icon is hidden by clicked again
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

  });

  /* a new test suite named "Initial Entries" */
  describe('Initial Entries', function() {

    /* a test that ensures when the loadFeed function is called and completes its work, there is at least
    a single class entry element within the class feed container. loadFeed() is asynchronous so this will require
    the use of Jasmine's beforeEach and asynchronous done() function.
     */

    beforeEach(function(done) {
      loadFeed(0, done);
    });

    it('There is at least single Element within the Feed', function() {
      expect($(".feed .entry").length).toBeGreaterThan(0);
    });

  });

  /*a new test suite named "New Feed Selection" */
  describe('New Feed Selection', function() {

    let beforechange;
    let afterchange;

    /*a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. */
    beforeEach(function(done){
        loadFeed(0, function()
        {
            // feed 0 done loading here
            beforechange = $('body .feed').text();
            loadFeed(1, function()
            {
                // feed 1 done loading here
                afterchange = $('body .feed').text();
                done();
           });
       });
    });

    it('Ensures when a new feed is loaded the content actually changes', function() {
      expect(beforechange).not.toEqual(afterchange);
    });

  });

}());
