"use client";

import { FormEventHandler, useState } from "react";
import { GrSend } from "react-icons/gr";
import { GrCheckmark } from "react-icons/gr";
import { Textfield } from "~/components/2024/input/textfield/Textfield";
import { Textarea } from "~/components/2024/input/textarea/Textarea";

export function ContactBlock() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const sendEmail: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (sent) return;

    const form = event.currentTarget;
    fetch("/api/mail/contact", { method: "POST", body: new FormData(form) })
      .then((value) => {
        if (value.ok) {
          setError(undefined);
          setSent(true);
          form.reset();
        } else {
          value.json().then((value) => setError(value.error));
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="contact">
      <p>Tell me about your idea and drop me a message</p>
      <form className="contact-form" onSubmit={sendEmail}>
        <Textfield id="contact-name" placeholder="Your Name" />
        <Textfield
          id="contact-email"
          type="email"
          placeholder="Your E-Mail (for reply)"
        />
        <Textarea id="contact-message" placeholder="Your Message" />
        <button className="send-button" type="submit" disabled={sent}>
          {sent ? (
            <GrCheckmark className="send-button-icon" />
          ) : (
            <GrSend className="send-button-icon" />
          )}
          <span>Send</span>
        </button>
        {error && <span>{error}</span>}
      </form>
    </div>
  );
}
