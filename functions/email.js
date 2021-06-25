const sgMail = require("@sendgrid/mail");
const functions = require("firebase-functions");
const secretAPI = functions.config().email.api;
sgMail.setApiKey(secretAPI);

// Sends a welcome email to the given user.
function sendWelcomeEmail(email, displayName) {
  let text = `<div>
      <h4>Bem vindo!</h4>
      <ul>
        <li>
          Name - ${displayName || ""}
        </li>
        <li>
          Email - ${email || ""}
        </li>
      </ul>
      <p>Espero que você tenha uma excelente experiência por aqui.
     Asseguro, de antemão, que tudo será de valia para seu crescimento pessoal!
      Coordialmente, Diogo.</p>
    </div>`;
  const msg = {
    from: `Diogo Basso <noreply@firebase.com>`,
    to: email,
    subject: "Bem-vindo ao Site do Diogo Basso!",
    text: text,
    html: text,
  };
  sgMail.send(msg);
}

// Sends a goodbye email to the given user.
function sendGoodbyeEmail(email, displayName) {
  let text = `<div>
      <h4>Até mais!</h4>
      <ul>
        <li>
          Name - ${displayName || ""}
        </li>
        <li>
          Email - ${email || ""}
        </li>
      </ul>
      <p>Nós confirmamos que seu email acaba de ser deletado do meu site. Qualquer feedback, por favor, sinta-se a vontade para responder esse email. Cordialmente, Diogo</p>
    </div>`;

  const msg = {
    from: `Diogo Basso <noreply@firebase.com>`,
    to: email,
    subject: "Bem-vindo ao Site do Diogo Basso!",
    text: text,
    html: text,
  };
  sgMail.send(msg);
}

module.exports = { sendGoodbyeEmail, sendWelcomeEmail };
