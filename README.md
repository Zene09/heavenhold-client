# Heavenhold Client

This is a client for the heavenhold api. It will allow users to see, and create new heroes, as well as edit them, and create weapons and edit them for their heroes.

## User Stories

* As a user, I want to be able to create an account.
* As a user, I want to be able to sign in.
* As a user, I want to be able to sign out.
* As a user, I want to be able to change my password.
* As a user, I want to be able to see all heroes.
* As a user, I want to be able to see information about a specific hero.
* As a user, I want to be able to create a new hero.
* As a user, I want to be able to update my hero.
* As a user, I want to be able to delete my hero.
* As a user, I want to be able to create a hero.
* As a user, I want to be able to give weapons to any hero.
* As a user, I want to be able to update my hero's weapons.
* As a user, I want to be able to delete my hero's weapons.

## Views

### User Views

| Route | Description |
| ----- | ----------- |
| /sign-up | allows users to create a new account |
| /sign-in | allows users to sign into their account |
| /sign-out | allows users to sign out of their account |
| /change-password | allows users to change their password |

### Hero Views

| Route | Description |
| ----- | ----------- |
| /heroes | heroes index  |
| /heroes/:id | hero show page |
| /createHero | new hero page |

Hero show page will have a modal for updating.
Users will be able to delete via the show page.
Hero show page will also allow updating and deleting weapons.

### Weapons Views

| Route | Description |
| ----- | ----------- |
| /addWeapon | new weapon page |

