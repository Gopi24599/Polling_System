<h1>Polling System API</h1>
<br>
<B>A Polling System API using NOde JS and MongoDB have Multiple Features
</b>

<h2>Routes:</h2>
<br>

POST /questions/create Create a new question. Key: question, Value: "Your Question"

POST /questions/:id/options/create Add options to a specific question. Key: option, Value: "Your Option"

GET /questions/:id/delete Delete a question (if no votes are associated with any option).

GET /options/:id/delete To Delete an option (if it has no votes).

POST /options/:id/add_vote: Increment the vote count for a specific option.

GET /questions/:id View a question and its options, including the votes given to each option.



<h2>Features:</h2>
<br>
<ul>
  <li>Create a question.</li>
<li>Add options to a question.</li>
<li>Add a vote to an option of a question.</li>
<li>Delete a question (only if none of its options have votes).</li>
<li>Delete an option (only if it has no votes).</li>
  <li>
View a question with its options.</li>
</ul>
