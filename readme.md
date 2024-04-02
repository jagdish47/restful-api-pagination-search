# RESTful API with Pagination and Search Functionality

This repository is a backend project focused on implementing pagination and search functionality. It utilizes RESTful API principles and follows the MVC architecture pattern. Additionally, a user route has been created to facilitate user addition and retrieval of all users.

## Github Setup

### Installation

1. Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo
   ```

3. Open the project in Visual Studio Code:

   ```bash
   code .
   ```

4. Install the project dependencies:

   ```bash
   npm install
   ```

### MongoDB Atlas Setup

1. Sign in or sign up on the [MongoDB Atlas website](https://www.mongodb.com/cloud/atlas).

2. Create a new cluster by following the instructions provided. Choose your preferred cloud provider, region, and cluster settings.

3. Once your cluster is created, click on the "Connect" button.

4. In the "Connect" tab, choose "Connect your application."

5. You will get a connection string. Replace `<username>` and `<password>` with your MongoDB Atlas username and password respectively. Make sure to replace `<dbname>` with your preferred database name.

### Create `.env` File

1. In the root directory of your project, create a file named `.env`.

2. Inside the `.env` file, add the following line:

```
    PORT=5000
    MONGO_DB_URL=Your-mongodb-connection-string
```

## Endpoints

### Create User

```
POST -> http://localhost:5000/api/v1/user/create-user
```

### Get All Users

```
GET -> http://localhost:5000/api/v1/user/get-users
```

### Search Users

```
GET -> http://localhost:5000/api/v1/user/search-user?username=jag
```

### Pagination and Limit User

```
GET -> http://localhost:5000/api/v1/user/?page=1&limit=5
```
