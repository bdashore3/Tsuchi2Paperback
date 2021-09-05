# Tsūchi to Paperback

A Paperback migration tool for [Tsūchi](https://github.com/bdashore3/Tsuchi) manual lists.

## Why did I create this?

Since MangaSoup was unfortunately shut down, I needed a way to migrate my mangas over to Paperback. Luckily, I had the tsūchi manual list and repurposed it to migrate all my mangas from MangaSoup over to Paperback.

## What does it do?

Since MangaSoup does not have backups, I had to convert my manga titles to a common medium (Tsūchi) and use that medium to create a Paperback backup. This dummy backup is then ran through Paperback's new migration feature where the mangas are matched and arranged.

## How do I use it?

You need a tsūchi manual manga list to get started. Here's the basic format of a list with multiple sources:

```
Source1:
- Manga 1
- Manga 2
- Manga 3

Source2:
- Manga 1
- Manga 2
- Manga 3
```

The bullet point and space are important as they differentiate a manga from a source name. A completed tsūchi manga list can be found [here](https://gist.github.com/bdashore3/c5aa34b8fa2f1444f0e98d7e8d5ed1c7).

The best way to find titles is to go on the source website and copy/paste the title from there. You can also type them manually, but Paperback's migration engine may give false results.

## Initial Configuration/setup

- Download the latest zip from the [Releases](https://github.com/bdashore3/Tsuchi2Paperback/releases). These contain binaries for Windows, macOS, and Linux.
- Extract the zipfile and navigate to the extracted folder
- Inside that folder, drop the .txt file of your manual list and rename it to `manualList.txt`
- Windows:
  - Double click the .exe file to create the dummy backup. A JSON file should show up in the working directory
- macOS and Linux:
  - Open a terminal and cd to the working directory (where all the executables are located)
  - If applicable, change permissions of the binary `chmod +x <binary>`
  - Run `./<binary>`
  - (Replace `<binary>` with the actual name of the binary itself)
  - A JSON file should show up in the working directory if this is performed correctly
- Send the outputted backup to your phone. I'd recommend using [FileBridge](https://apps.apple.com/us/app/filebridge/id1562387073) if you use a cable to transfer items.

## Migrating on Paperback

Note: This is not tested on a dirty version of Paperback. I'd recommend reinstalling the app before proceeding. Not reinstalling is done at your own risk of getting duplicates.

- Restore the Paperback backup using the share menu in files or wherever you sent the backup from
- Import the sources you want to add from external repositories (Make sure to log in first!)
- Restart the app
- Go into `All manga` in your library, you should see a bunch of broken manga entries. This is NOT a bug.
- Click the migration icon and select the source you want to migrate from. Let's use Manga4Life as an example
- On the Migrate To window, click the SAME source you used as migrate from (in this case Manga4Life)
- On the Migrate Options window, select `Include Migrated Manga` and click start
- Wait until all the mangas are processed
- For each entry in the migration wizard, select `Replace` which will replace the dummy entry with the one from your desired source
  - If an alternative could not be found, use the search button to find your manga
- Once all of the mangas have been checked in verified, click `finish`
- Do these steps again for all your sources.

## Contribution

- Adding new manga sources
  - Paperback is case-sensitive for sources. The switch statement [here](https://github.com/bdashore3/Tsuchi2Paperback/blob/default/main.js#L78) converts all sources to the correct casing in the dummy backup
  - Source repositories can be added in the dummy backup creation [here](https://github.com/bdashore3/Tsuchi2Paperback/blob/default/main.js#L17)
  - The best way to get the correct format is to install paperback and generate a backup with the specified sources installed.

In other cases, please make a new issue in [Github issues](https://github.com/bdashore3/Tsuchi/issues).

If you don't have a github account, please take a look at [other contact options](#developers-and-permissions) and I'll add your issue for you.

## Other downloads

If you liked this software, feel free to check out [Tsūchi](https://github.com/bdashore3/Tsuchi) for realtime manga update notifications.

# Developers and Permissions

We try to make comments/commits as detailed as possible, but if you don't understand something, please contact either of the developers down below. The best avenue for help is the support discord.

Huge thanks to the [Paperback](https://paperback.moe) team for helping with the idea and backup format.

Creator/Developer: Brian Dashore

Join the support discord here (get the king-updates role to access the channel): [https://discord.gg/pswt7by](https://discord.gg/pswt7by)

Developer Discord: kingbri#6666

Contact page: [https://kingbri.me/socials](https://kingbri.me/socials)
