import nc from "next-connect"
import axios from "axios"
import FormData from "form-data"

const handler = nc()

handler.post(async (req, res) => {
  const {code} = req.query
  try {
    const data = new FormData()
    data.append("client_id", "977230484927021066")
    data.append("client_secret", "5cYfj15y-gQ6BkycbpmJZLZyanvZxjeF")
    data.append("grant_type", "authorization_code")
    data.append(
      "redirect_uri",
      "https://discord-oauth-tutorial.atticuskuhn.repl.co"
    )
    data.append("scope", "identify")
    data.append("code", code.toString())
    console.log(data)

    fetch("https://discordapp.com/api/oauth2/token", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        const config = {
          headers: {
            authorization: `Bearer ${data.access_token}`,
          },
        }
        axios
          .get("https://discordapp.com/api/users/@me", config)
          .then((response) => {
            console.log(response.data.username)
            res.send(response.data.username)
          })
          .catch((error) => {
            console.log(error)
          })
      })
    window.location.href = "/"
  } catch (error) {
    console.log(error)
  }
})
export default handler
