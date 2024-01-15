# Pragmatic RESTful API Best Practices - Learning Notes

These notes capture key learnings from the article [Best Practices for a Pragmatic RESTful API](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api) by Vinay Sahni.

### 1. Endpoint Naming: Singular vs. Plural
- **Best Practice:** Maintain consistency in the URL format, always use a pluralized form for endpoint names (e.g., `/tickets` instead of `/ticket`).
- **Reasoning:** Consistency simplifies both API consumption and implementation.

### 2. Handling Non-CRUD Actions
- **Approaches:**
    - Restructure the action to appear as a field of a resource, suitable for actions without parameters.
    - Treat it as a sub-resource with RESTful principles (e.g., GitHub's API uses PUT/DELETE for starring/unstarring gists).
    - If the action doesn't fit into CRUD operations, choose a clear, well-documented endpoint (e.g., `/search`).
- **Considerations:** Prioritize clarity and ease of use for API consumers.

### 3. Error Handling: Prefer Throwing Hard Errors
- **Best Practice:** Instead of redirecting to SSL counterparts, throw hard errors to provide immediate feedback to the client.
- **Advantages:** Faster identification of issues, better developer experience, and improved troubleshooting.

### 4. API Versioning
- **Best Practice:** Implement versioning in the URL (major version) and use headers for sub-versioning.
- **Example:** `/v1/resource` in the URL, and `Accept: application/vnd.company.v1+json` in headers.
- **Benefits:** Enables smooth evolution of the API while supporting existing clients.

### 5. Filtering and Sorting: Query Parameters
- **Best Practice:** Use query parameters for filtering and sorting (e.g., `/users?sort=name&filter=age>25`).
- **Advantages:** Simplifies API calls, enhances readability, and supports flexible data retrieval.

### 6. Fields Query Parameter
- **Best Practice:** Implement a fields query parameter to limit the fields returned in the response (e.g., `/users?fields=name,email`).
- **Use Case:** Useful when clients only need specific data to optimize bandwidth.

### 7. Embed Parameter for Related Resources
- **Best Practice:** Introduce an embed parameter to auto-embed related resources in the response (e.g., `/base/tickets?embed=customer&fields=id,customer.id,customer.name`).
- **Efficiency:** Reduces the need for multiple requests to fetch related data.

### 8. POST Request: Return 201 with Location Header
- **Best Practice:** Upon successful POST request, return HTTP status 201 with the URL of the created resource in the `Location` header.
- **Example:** `HTTP/1.1 201 Created Location: /resource/1234`

### 9. HATEOAS (Hypermedia as the Engine of Application State)
- **Principle:** Clients should not rely on pre-defined URLs or documentation to navigate the API.
- **Implementation:** Provide hyperlinks in responses to guide clients to the next steps, enabling API evolution without breaking existing clients.

### 10. Naming Convention: snake_case vs. camelCase
- **Best Practice:** Use snake_case for API naming conventions.
- **Reasoning:** Consistency with URLs and simplicity in parsing.

### 11. Pretty Print with Gzip
- **Option:** Allow pretty print in responses using a query parameter (e.g., `?pretty=true`) and support Gzip compression for efficient data transfer.

### 12. Envelopes and JSONP (JSON with Padding)
- **Explanation:** "Envelopes" in the context of RESTful APIs, it typically refers to wrapping the actual data in a structured format, often with metadata. This practice aims to provide additional information about the response, such as status, errors, or pagination details.

### 13. Pagination: Link Header and X-Total-Count Header
- **Implementation:** Include pagination data in the Link header and use `X-Total-Count` header for the count of objects.
- **Example Link Header:** `Link: </resource?page=2>; rel="next", </resource?page=5>; rel="last"`

### 14. X-HTTP-Method-Override Header
- **Use Case:** For clients supporting only GET and POST, use the `X-HTTP-Method-Override` header to perform PUT, PATCH, and DELETE requests.

### 15. Caching: ETag (If-None-Match), Last-Modified (If-Modified-Since)
- **Headers:** Leverage ETag and Last-Modified headers for caching.
- **Benefits:** Efficiently handle conditional requests and reduce server load.

### 16. Error Codes and Documentation
- **Best Practice:** Errors should contain a unique code, clearly documented in API documentation.
- **HTTP Status Codes:** Utilize standard HTTP status codes for different types of errors.
