# APL Development Task List
## Phase I (Pre-Alpha)
### Goals
Create the foundation scripts and functionality for APL, with the following abilities:
* Allow new users to easily learn how to navigate APL
* Let users navigate and read basic content pages, including by id and by basic search
* Create administration / debuggin tools that are easy to use, that allow for smooth operation in the event of bugs
### Tasks to Complete
Development | Task | Owner | Status | Started | Ended | Comments
----------- | ---- | ----- | ------ | ------- | ----- | ---------
FE | Outline and draft basic page navigation and page map | meta | In-Progress | 12/23/18 | | 
FE | Create content for the base pages (home, about, help, etc) | | To-Do | | | 
FE | Define the basic page formatting | | To-Do | | | 
FE | Create help content for alpha features | | To-Do | | | 
FE | Define key names and purposes to be used by ap.l | | To-Do | | | 
BE | Outline and code basic logic structure for decision tree (including room for other features) | | To-Do | | | 
BE | Create 2 functions - the error creator and the page creator, with base features for alpha, with future planning for beta | | To-Do | | | 
BE | Manage how config settings are handled on user 'ap', and implement base structure - db as prod, with script as bkp | | To-Do | | | 
BE | Create basic admin controls - adding, removing, and editing articles | | To-Do | | | 
BE | Make a function to generate a list of new/latest content (news, articles, profiles, lists) | | To-Do | | | 
DB | Create access scripts to import Raw DB access out to central location | | To-Do | | | 
DB | Implement raw db access and manipulation for whitelisted users | | To-Do | | | 
DB | Design and flesh out basic models and schemas for each of the 6 databases | | To-Do | | | 
DB | Basic content searching (articles and lists) | | To-Do | | | 
### Testing (Closed Alpha)
* Have experienced players "red team" service to look for ways to manipulate features, then find useabe mitigations.
* Start adding pages that explain hackmud / scripting / tools to use / etc
## Phase II (Alpha)
### Goals
Add more robust features for users, while securing service from malicious abuse.
* Improve page formatting and create puzzle hooks
* Implement page editor and user login system
* Add security features such as event logging and credential verification
### Tasks to Complete
Development | Task | Owner | Status | Started | Ended | Comments
----------- | ---- | ----- | ------ | ------- | ----- | ---------
FE | Improve the page formatting algorithim to improve page look | | To-Do | | | |
FE | Add hooks / secrets within UI interface for for puzzles tied into APL | | To-Do | | | |
FE | Update and expand help page interface | | To-Do | | | |
FE | Design manual ads | | To-Do | | | |
BE | Implement event logging into user activity. | | To-Do | | | |
BE | Create handling mechanisim for login events  | | To-Do | | | |
BE | Build out page editor for content creation (local-only for members, public for admins) | | To-Do | | | |
BE | Bake basic troubleshooting tools into scripts | | To-Do | | | |
BE | Content verification | | To-Do | | | |
DB | Further define models/schemas, and proof them for full features | | To-Do | | | |
DB | Implement 'dev' database model, which allows for content development seperate from prod content pages | | To-Do | | | |
DB | Create a basic versioning system along with edit lock-out | | To-Do | | | |
DB | Advanced searching by content 'tags' created by users | | To-Do | | | |
DB | Account Management commands | | To-Do | | | |
BT | Automate ads with 'pira' (retire then connect to seperate hm account) | | To-Do | | | |
BT | Create varying ads, implementing puzzle lore into them as well | | To-Do | | | |
BT | Have bot carry out automatic tasks for APL, pulling from seperate jade.vita account for bot payment | | To-Do | | | |
### Testing (Open Beta)
* Test account system and editor
* Try fuzzing search inputs and see what safeguards need to be put in place
* Try to break page formatting for content creation, and see what can be improved
##Phase III (Beta)
###Goals
Complete all base features, and fully debug input and page creation/editing systems.
* Complete base features for the editor (as seperate script)
* Finialize page structure and navigation
* Implement help system and write out rest of help page
* Finalize all DB models/schemas, and test all types of content for APL
###Tasks to Complete
Development | Task | Owner | Status | Started | Ended | Comments
----------- | ---- | ----- | ------ | ------- | ----- | ---------
FE | Finalize page creation function and how it integrates all content types (lists vs articles vs news vs profiles) | Unassigned | | To-Do | | | 
FE | Make puzzle hook enabler system and integrate it into main service | Unassigned | | To-Do | | | 
FE | Fully map out all potential pages logically for ease of navigation, and touch up all base pages | Unassigned | | To-Do | | | 
FE | Finalize help page, and establish toubleshooting / help path for users | Unassigned | | To-Do | | | 
FE | Design seperate look for page editor script | Unassigned | | To-Do | | | 
BE | Dedicate a way for admins to access raw logs for APL | Unassigned | | To-Do | | | 
BE | Finalize page editor for members and users, without connecting the two domains | Unassigned | | To-Do | | | 
BE | Complete how 'tags' are defined and created, as well as complete content verification | Unassigned | | To-Do | | | 
BE | For corp specific content, define safe way to verify identity and whitelisting without turning script nullsec | Unassigned | | To-Do | | | 
DB | Define in full all models and schema, and implement into db commands | Unassigned | | To-Do | | | 
DB | finish 'tag' definiation | Unassigned | | To-Do | | | 
DB | Flesh out all possible searching, and safeguard the search functions | Unassigned | | To-Do | | | 
BT | Setup all the chat channels for bots, help, and data exfiltration systems | Unassigned | | To-Do | | | 
### Testing (Closed Pre-Release)
* Test test test the bots!!!
