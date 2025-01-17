from pydantic import BaseModel, EmailStr

class ContactForm(BaseModel):
    name: str
    mobile: str
    email: EmailStr
    message: str 