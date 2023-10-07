Forked from [nsdont/gitbook-plugin-new-flowchart](https://github.com/nsdont/gitbook-plugin-new-flowchart),to make sure we can add a custom style for the chart.

Fox Flowchart Plugin
==============

To use the plugin in your Gitbook project, add the plugin to the `book.json` file.

```
{
    "plugins": ["fox-flowchart"]
}
```

we can add custom style if necessary:

```javascript
pluginsConfig:{
    'flowchart':{        
        'x': 0,
        'y': 0,
        'width':1,
        'line-width': 1,
        'line-length': 50,
         'text-margin': 10       
    }
}
```

Then, to include a sequence diagram, just wrap your definition in a "sequence" code block. For example:

    ``` flow
    st=>start: Start|past:>http://www.google.com[blank]
    e=>end: End:>http://www.google.com
    op1=>operation: My Operation|past
    op2=>operation: Stuff|current
    sub1=>subroutine: My Subroutine|invalid
    cond=>condition: Yes
    or No?|approved:>http://www.google.com
    c2=>condition: Good idea|rejected
    io=>inputoutput: catch something...|request
    
    st->op1(right)->cond
    cond(yes, right)->c2
    cond(no)->sub1(left)->op1
    c2(yes)->io->e
    c2(no)->op2->e
    ```

Please reference the [flowchart.js](https://adrai.github.io/flowchart.js/) documentation for details on syntax.

## Reference
This project inspiration from [gmassanek/gitbook-plugin-js-sequence-diagram](https://github.com/gmassanek/gitbook-plugin-js-sequence-diagram),forked from [nsdont/gitbook-plugin-new-flowchart](https://github.com/nsdont/gitbook-plugin-new-flowchart)
