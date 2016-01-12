# Notes App

## Requirements

- Create a “Notes app" 
- Create login and options to:
    - create, read and delete notes

## Overview

Objects:
- User
- Notes

### Use-case & Scenario

Authentication
- User should be able to login to manipulate notes
    - if correct username & password are provided, authenticate user and redirect to notes overview
    - if incorrect username or password, re-display form with appropriate error message
    - if username or password not provided, prevent user from submitting form & display appropriate error message 

Once Logged In:
-  User should be able to logout (from any page)
-  User should be able to see notes overview
    - click on note to read note in full detail
    - click on ‘x’ next to note to delete note
    - click on "Add new note" button to access “New note" form
- User should be able to add new Note
    - if User clicks “Add Note” button, New Note is added to overview and redirect to notes overview
    - if User clicks “cancel” to cancel note, warning appears, and redirect to notes overview
    - If User fills in one or no inputs (“Title” or “Note”) and clicks “Add Note” button, appropriate required message appears
- User should be able to read note thread
    - click “Back to Overview” button to return to overview
    - click “Add Additional Note” button to access “Sub note form”
    - if User enters note in text field and clicks “Add Note” (not will appear in thread below)
    - click “cancel” to cancel note; (Warning appears)

### Instructions 

