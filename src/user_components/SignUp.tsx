import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async () => {
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        style={{ marginLeft: "8px" }}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        style={{ marginLeft: "8px" }}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <button onClick={handleSignUp} style={{ marginLeft: "8px" }}>
        Sign Up
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
