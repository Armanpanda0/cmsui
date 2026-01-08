import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    // Simulate login logic (replace with actual authentication)
    if (username === "admin" && password === "123") {
      navigate("/dashboard");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <>
      <style>{`
        .login-body {
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          perspective: 1000px;
        }

        .login-box {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          width: 100%;
          max-width: 400px;
          animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .title {
          text-align: center;
          color: #fff;
          margin-bottom: 30px;
          font-size: 28px;
          font-weight: bold;
        }

        .inputBox {
          position: relative;
          margin-bottom: 25px;
        }

        .inputBox input {
          width: 100%;
          padding: 15px 15px 15px 45px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 10px;
          color: #fff;
          font-size: 16px;
          outline: none;
          transition: all 0.3s ease;
        }

        .inputBox input::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }

        .inputBox input:focus {
          border-color: #ffeb3b;
          box-shadow: 0 0 10px rgba(255, 235, 59, 0.5);
        }

        .inputBox .icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255, 255, 255, 0.7);
          font-size: 18px;
        }

        .error {
          color: #ff6b6b;
          font-size: 14px;
          margin-bottom: 15px;
          text-align: center;
        }

        .submitBtn {
          width: 100%;
          padding: 15px;
          background: linear-gradient(45deg, #ffeb3b, #ff9800);
          color: #333;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submitBtn:hover {
          background: linear-gradient(45deg, #fff176, #ffb74d);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 235, 59, 0.4);
        }

        .forgotPassword {
          text-align: center;
          margin-top: 15px;
        }

        .forgotPassword a {
          color: #ffeb3b;
          text-decoration: none;
          font-size: 14px;
        }

        .forgotPassword a:hover {
          text-decoration: underline;
        }

        @media (max-width: 480px) {
          .login-box {
            padding: 30px 20px;
            margin: 20px;
          }
          .title {
            font-size: 24px;
          }
        }
      `}</style>

      <div className="login-body">
        <div className="login-box">
          <h2 className="title">Welcome Back</h2>
          {error && <div className="error">{error}</div>}
          <form onSubmit={handleLogin}>
            <div className="inputBox">
              <span className="icon">👤</span>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="inputBox">
              <span className="icon">🔒</span>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submitBtn">
              Login
            </button>
          </form>
          <div className="forgotPassword">
            <a href="#">Forgot Password?</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
