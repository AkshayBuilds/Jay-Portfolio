from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi_mail import FastMail, MessageSchema, MessageType
from pydantic import BaseModel, EmailStr
from .config import email_conf

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Local development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define the Contact Form Schema
class ContactForm(BaseModel):
    name: str
    mobile: str  # Added mobile number field
    email: EmailStr
    message: str

@app.get("/hello")
def read_root():
    return {"message": "hello from akshay"}

@app.post("/api/Contact")
async def send_Contact_email(Contact: ContactForm):
    try:
        admin_message = MessageSchema(
            subject=f"New Contact Form Submission from {Contact.name}",
            recipients=["amsp604@gmail.com"],  # Your email address
            body=f"""
            New Contact form submission:
            
            Name: {Contact.name}
            Mobile: {Contact.mobile}
            Email: {Contact.email}
            Message: {Contact.message}
            """,
            subtype=MessageType.plain
        )

        # Auto-reply to user
        user_message = MessageSchema(
            subject="Thank You for Reaching Out",
            recipients=[Contact.email],
            body=f"""
            Dear {Contact.name},

            Thank you for contacting Jay Prajapati. I have received your message and will get back to you as soon as possible.

            If your inquiry is urgent, please feel free to reach out directly at +91 9106940132.

            I appreciate your patience and look forward to assisting you.

            Your message:
            {Contact.message}

            Warm regards,
            Jay Prajapati
            HR Professional
            """,
            subtype=MessageType.plain
        )

        fm = FastMail(email_conf)
        # Send both emails
        await fm.send_message(admin_message)
        await fm.send_message(user_message)

        return {"status": "success", "message": "Email sent successfully"}
    except Exception as e:
        print(f"Error sending email: {str(e)}")  # For debugging
        raise HTTPException(status_code=500, detail=str(e))
 
