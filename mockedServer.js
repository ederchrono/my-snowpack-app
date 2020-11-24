import { createServer, Model } from "miragejs"
import faker from 'faker'

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
    },

    seeds(server) {
      for (let index = 0; index < 100; index++) {
        server.create("user", {
          name: faker.name.firstName(),
          email: faker.internet.email(),
          avatar: faker.image.avatar()
        })
      }
      server.create("user", { name: "Alice" })
    },

    routes() {
      this.namespace = "api"

      this.get("/users", (schema) => {
        return schema.users.all()
      })

      this.post("/users", (schema, request) => {
        schema.users.create(JSON.parse(request.requestBody))
        return {success: true}
      })
    },
  })

  return server
}