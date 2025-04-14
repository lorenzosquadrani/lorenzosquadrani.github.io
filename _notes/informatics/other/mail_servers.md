---
layout: note
title: "Mail Servers"
---

**Problem**: I want my email to be fetched 'online', meaning that every time there is a new email it is immediately detected and notified, without waiting for a 'refreshing period'. 
I think there are some conditions under which this is possible. But we need to know the basics of what are mail servers.

### Basic Definitions

So, what is a mail server?
A mail server is a program that sends and receives email, allowing to transfer messages to and from different mail clients.

Then, what is mail client?
A mail client is program (often web-based, but also desktop) that stores email messages.
Examples are: Outlook, Gmail, Thunderbird.

How does a mail server work?
We need to distinguish two types of mail servers: outgoing email servers (or mail transfer agents, MTA) and incoming mail servers (or mail delivery agents, MDA).
MTAs retrieve outgoing email messages from the sender's email client and deliver them to MDAs, which deliver the messages to the recipient's mail client.

Both MTAs and MDAs do what they do using email *protocols*, which tell the server how to process incoming requests, where to forward the messages, and how to deliver them to the intended mail client.

The most common example of protocol for a MTA is the *Simple Mail Transfer Protocol* (SMTP).
The protocol reads the data in the email envelope (sender and recipient's email addresses, among other data).
The protocol uses the *Domain Name System* (DNS) to translate the recipient's domain into an IP address.
At this point the MTA locates a MDA by querying the *mail exchange* (MX) records.

The most common examples of protocols used by a MDA are the *Internet Message Access Protocol* (IMAP) and the Post Office Protocol Version 3 (POP3).

### Push and Polling
Apparently, the feature I am looking for is called Push emails.
The alternative to push, which the periodical check for new emails, is called polling.

Only mail servers that uses the IMAP protocol supports the push feature.
There is an extension of the IMAP procol, called IMAP IDLE, that introduces a constant connection between an email client and the email server, so that the email server can notify the client as soon as a new email arrives.
Thunderbird documentation have a page for [push emails](https://support.mozilla.org/en-US/kb/configure-push-email-thunderbird-android).
I just followed the instructions and it worked.

### References
- https://www.cloudflare.com/learning/email-security/what-is-a-mail-server/
- https://askubuntu.com/questions/377698/is-it-possible-to-receive-email-in-real-time