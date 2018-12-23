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
FE | Create content for the base pages (home, about, help, etc) | unassigned | to-do | | | 
FE | Define the basic page formatting | unassigned | to-do | | | 
FE | Create help content for alpha features | unassigned | to-do | | | 
FE | Define key names and purposes to be used by ap.l | unassigned | to-do | | | 
BE | Outline and code basic logic structure for decision tree (including room for other features) | unassigned | to-do | | | 
BE | Create 2 functions - the error creator and the page creator, with base features for alpha, with future planning for beta | unassigned | to-do | | | 
BE | Manage how config settings are handled on user 'ap', and implement base structure - db as prod, with script as bkp | unassigned | to-do | | | 
BE | Create basic admin controls - adding, removing, and editing articles | unassigned | to-do | | | 
BE | Make a function to generate a list of new/latest content (news, articles, profiles, lists) | unassigned | to-do | | | 
DB | Create access scripts to import Raw DB access out to central location | unassigned | to-do | | | 
DB | Implement raw db access and manipulation for whitelisted users | unassigned | to-do | | | 
DB | Design and flesh out basic models and schemas for each of the 6 databases | unassigned | to-do | | | 
DB | Basic content searching (articles and lists) | unassigned | to-do | | | 
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
FE | Improve the page formatting algorithim to improve page look | unassigned | to-do | | |
FE | Add hooks / secrets within UI interface for for puzzles tied into APL | unassigned | to-do | | | 
FE | Update and expand help page interface | unassigned | to-do | | | 
FE | Design manual ads | unassigned | to-do | | | 
BE | Implement event logging into user activity. | unassigned | to-do | | | 
BE | Create handling mechanisim for login events  | unassigned | to-do | | | 
BE | Build out page editor for content creation (local-only for members, public for admins) | unassigned | to-do | | | 
BE | Bake basic troubleshooting tools into scripts | unassigned | to-do | | | 
BE | Content verification | unassigned | to-do | | | 
DB | Further define models/schemas, and proof them for full features | unassigned | to-do | | | 
DB | Implement 'dev' database model, which allows for content development seperate from prod content pages | unassigned | to-do | | | 
DB | Create a basic versioning system along with edit lock-out | unassigned | to-do | | | 
DB | Advanced searching by content 'tags' created by users | unassigned | to-do | | | 
DB | Account Management commands | unassigned | to-do | | | 
BT | Automate ads with 'pira' (retire then connect to seperate hm account) | unassigned | to-do | | | 
BT | Create varying ads, implementing puzzle lore into them as well | unassigned | to-do | | | 
BT | Have bot carry out automatic tasks for APL, pulling from seperate jade.vita account for bot payment | unassigned | to-do | | | 
### Testing (Open Beta)
* Test account system and editor
* Try fuzzing search inputs and see what safeguards need to be put in place
* Try to break page formatting for content creation, and see what can be improved
## Phase III (Beta)
### Goals
Complete all base features, and fully debug input and page creation/editing systems.
* Complete base features for the editor (as seperate script)
* Finialize page structure and navigation
* Implement help system and write out rest of help page
* Finalize all DB models/schemas, and test all types of content for APL
### Tasks to Complete
Development | Task | Owner | Status | Started | Ended | Comments
----------- | ---- | ----- | ------ | ------- | ----- | ---------
FE | Finalize page creation function and how it integrates all content types (lists vs articles vs news vs profiles) | unassigned | to-do | | |  
FE | Make puzzle hook enabler system and integrate it into main service | unassigned | to-do | | |  
FE | Fully map out all potential pages logically for ease of navigation, and touch up all base pages | unassigned | to-do | | |  
FE | Finalize help page, and establish toubleshooting / help path for users | unassigned | to-do | | |  
FE | Design seperate look for page editor script | unassigned | to-do | | |  
BE | Dedicate a way for admins to access raw logs for APL | unassigned | to-do | | |  
BE | Finalize page editor for members and users, without connecting the two domains | unassigned | to-do | | |  
BE | Complete how 'tags' are defined and created, as well as complete content verification | unassigned | to-do | | |  
BE | For corp specific content, define safe way to verify identity and whitelisting without turning script nullsec | unassigned | to-do | | |  
DB | Define in full all models and schema, and implement into db commands | unassigned | to-do | | |  
DB | finish 'tag' definiation | unassigned | to-do | | |  
DB | Flesh out all possible searching, and safeguard the search functions | unassigned | to-do | | | 
BT | Setup all the chat channels for bots, help, and data exfiltration systems | unassigned | to-do | | | 
### Testing (Closed Pre-Release)
* Test test test the bots!!!
