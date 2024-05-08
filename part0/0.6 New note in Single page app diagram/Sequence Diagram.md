```mermaid
sequenceDiagram
Note left of Browser: A note is submmited by User
Browser->>Browser: note object is created and appended to array. Notes list is rerendered on page.
Browser->>Server: HTTP POST .../new_note_spa
Note over Browser,Server: Payload includes content and Date as JSON
Server-->>Browser: HTTP 201 Created
```
