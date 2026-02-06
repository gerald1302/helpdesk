from sqlalchemy import Column, Integer, String, Text, ForeignKey, TIMESTAMP
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String, unique=True, index=True)
    password = Column(String)
    role = Column(String)
    created_at = Column(TIMESTAMP, default=datetime.utcnow)

class Category(Base):
    __tablename__ = "categories"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    description = Column(Text)

class Priority(Base):
    __tablename__ = "priorities"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    level = Column(Integer)

class Status(Base):
    __tablename__ = "statuses"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)

class Ticket(Base):
    __tablename__ = "tickets"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(Text)
    category_id = Column(Integer, ForeignKey("categories.id"))
    priority_id = Column(Integer, ForeignKey("priorities.id"))
    status_id = Column(Integer, ForeignKey("statuses.id"))
    created_by = Column(Integer, ForeignKey("users.id"))
    assigned_to = Column(Integer, ForeignKey("users.id"), nullable=True)
    created_at = Column(TIMESTAMP, default=datetime.utcnow)
    updated_at = Column(TIMESTAMP, default=datetime.utcnow, onupdate=datetime.utcnow)

    # Relations (facultatif, mais recommandé pour faciliter les jointures)
    creator = relationship("User", foreign_keys=[created_by])
    assignee = relationship("User", foreign_keys=[assigned_to])
    category = relationship("Category")
    priority = relationship("Priority")
    status = relationship("Status")

class Comment(Base):
    __tablename__ = "comments"
    id = Column(Integer, primary_key=True, index=True)
    ticket_id = Column(Integer, ForeignKey("tickets.id"))
    user_id = Column(Integer, ForeignKey("users.id"))
    message = Column(Text)
    created_at = Column(TIMESTAMP, default=datetime.utcnow)

    ticket = relationship("Ticket")
    author = relationship("User")

class TicketHistory(Base):
    __tablename__ = "ticket_history"
    id = Column(Integer, primary_key=True, index=True)
    ticket_id = Column(Integer, ForeignKey("tickets.id"))
    old_status_id = Column(Integer, ForeignKey("statuses.id"))
    new_status_id = Column(Integer, ForeignKey("statuses.id"))
    changed_by = Column(Integer, ForeignKey("users.id"))
    changed_at = Column(TIMESTAMP, default=datetime.utcnow)

    ticket = relationship("Ticket")
    old_status = relationship("Status", foreign_keys=[old_status_id])
    new_status = relationship("Status", foreign_keys=[new_status_id])
    user = relationship("User")