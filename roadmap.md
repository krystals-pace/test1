# Roadmap

## What this is
A room reservation system for the Walter Dods, Jr. RISE Center's 5 bookable rooms. It's for RISE Center staff and the students/groups who book those rooms, and it enforces four different access rules per room (open to anyone, pre-approved only, admin-approval required, test-passed only) so a room can't be booked by someone who isn't allowed to use it.

## What Done means
A stranger can sign up, log in, and see all 5 rooms with their access rules shown. They can book the one open room and see it persist after logging out and back in. A person marked pre-approved can book either pre-approved room. A person can submit a request for the admin-approval room and an admin can approve or deny it. A person marked as having passed the test can book the recording studio. No two people can hold the same room for the same time slot.

## Slices
1. Signing up and logging in | done-criteria: person can sign up with email/password and lands on a page showing their email; stays logged in across a tab close/reopen; wrong password shows an error and blocks entry; log out returns to a public login page and hides logged-in-only content | status: ACTIVE
2. Book the open room (Room A) | done-criteria: logged-in person books an available slot on Room A and sees it marked Reserved under their name; reservation persists across logout/login; a second person attempting the same slot is blocked, not double-booked; person can cancel their own reservation and the slot reopens | status: pending
3. Access tiers (pre-approved rooms, admin-approval room, test-gated studio) | done-criteria: non-pre-approved user sees the pre-approved rooms' booking disabled with an explanation; admin flips a user's pre-approved flag and that user can then book; person submits an admin-approval-room request that lands in an admin queue and Approve/Deny changes the requester's status accordingly; non-test-passed user is blocked from the recording studio while a test-passed user can book it | status: pending

## Backlog
- Auto-graded/online test-taking flow for the recording studio (for now: a manual "passed" flag)
- Self-service pre-approval requests (for now: staff sets the flag manually)
- Email/text reminders or notifications
- Recurring bookings
- Multi-week/full calendar view
- Room photos and descriptions
- Waitlists for taken slots
- Usage reports/analytics for RISE staff
- QR-code check-in/check-out
- Mobile app
