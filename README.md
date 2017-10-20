# Shopify Migration Experiment
## This is just an experiment, don't judge

I had a project that used and abused Shopify's content types. This a hacky but common approach to CMSes that don't allow proper modular content management, or otherwise restrict the server environment, such as providing their own interpreted langauge. It's good for end consumers of the platform, and often limiting for developers, in the interest of maintainability and security... anyhow!...

I needed to transfer content from one shopify store to the next. This was tedious, incomplete, and inefficient doing it by hand, nonetheless non-repeatable. All bad. So! We needed to use the API.

These are the results of that run. It was the awful case that we were running this experiment due to a need to do a production push, so, once the production push was complete, the code was left untouched for later fiddling. There is a lot of commented out code, that either functions and updates a certain segment of content (representing an early step), or, is used to probe a particular part of code for its async output.

### This code is async by nature

This is not only by design, it is necessary in order to properly interact with the API.

### There are no safetys built into the code

API limits are still at play here, and if you try to run too much too fast, it's easy to exceed them.

### Using this code:
run:
    ```npm install ```

This should install all dependencies, such as the Shopify node API and any other libs
