# OAuth 2.0 and OpenID Connect

## OAuth 2.0

OAuth 2.0 is an authorization framework widely used for securing web and mobile applications. It allows third-party applications to access resources on behalf of a user without exposing their credentials.

### Key Terminology:

1. **Resource Owner:** The user who owns the data or resource being shared.

2. **Client:** The application requesting access to a protected resource on behalf of the resource owner.

3. **Authorization Server:** The server that authenticates the resource owner, obtains authorization, and issues access tokens to the client.

4. **Resource Server:** The server hosting the protected resources, capable of accepting and responding to protected resource requests using access tokens.

5. **Access Token:** A credential representing the authorization granted to the client.

### OAuth 2.0 Flow:

1. **Client Registration:** The client registers with the authorization server and obtains client credentials. This step involves the client providing information such as its name, redirect URI, and sometimes a client secret.

2. **Authorization Request:** The client requests authorization from the resource owner. The authorization request includes details like the requested scope, response type, and redirect URI.

3. **User Authorization:** The resource owner grants permission to the client. The authorization server presents a consent screen to the user, explaining what access the client is requesting.

4. **Authorization Grant:** The authorization server provides an authorization grant to the client. Depending on the grant type, this could be an authorization code, implicit token, or another form of grant.

5. **Access Token Request:** The client exchanges the authorization grant for an access token. The client sends a request to the token endpoint with the authorization grant to obtain the access token.

6. **Accessing Protected Resource:** The client uses the access token to access the protected resource on the resource server.

## OpenID Connect (OIDC)

OpenID Connect is an identity layer built on top of OAuth 2.0. It provides a standard way for clients to obtain user identity information.

### Key Concepts:

1. **ID Token:** A JSON Web Token (JWT) containing identity information about the authenticated user. This token is signed and optionally encrypted, providing a secure way to verify the user's identity.

2. **UserInfo Endpoint:** An endpoint where additional user information can be obtained after authentication. The client can make a request to this endpoint with the access token to retrieve more details about the user.

3. **Discovery Document:** A document providing metadata about the OpenID Connect provider, including endpoints and supported features. Clients can dynamically discover the necessary information about the OpenID Connect provider.

### OpenID Connect Flow:

1. **Client Registration:** Similar to OAuth, the client registers with the OpenID Connect provider. The client obtains a client ID and, in some cases, a client secret.

2. **Authentication Request:** The client initiates an authentication request, including scope and redirect URI. The request may specify the desired level of authentication assurance (e.g., prompt=login for reauthentication).

3. **User Authentication:** The end-user authenticates with the OpenID Connect provider. This could involve logging in with a username and password or using other authentication mechanisms like multi-factor authentication.

4. **ID Token Issuance:** Upon successful authentication, the OpenID Connect provider issues an ID token. The ID token contains information such as the user's identity, issuer, and expiration time.

5. **UserInfo Request:** The client may request additional user information from the UserInfo endpoint using the access token. This step is optional and depends on the client's need for more user details beyond what is in the ID token.
