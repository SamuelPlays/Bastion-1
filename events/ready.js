/**
 * @file ready event
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license MIT
 */

const COLOR = require('chalk');

module.exports = async Bastion => {
  try {
    Bastion.user.setStatus(Bastion.config.status);
    Bastion.user.setGame(Bastion.config.game);

    await Bastion.db.run('CREATE TABLE IF NOT EXISTS guildSettings' +
      '(guildID TEXT NOT NULL UNIQUE,' +
      `prefix TEXT NOT NULL DEFAULT '${Bastion.config.prefix}',` +
      'greet TEXT,' +
      'greetMessage BLOB,' +
      'greetTimeout INTEGER NOT NULL DEFAULT 30,' +
      'greetPrivate TEXT NOT NULL DEFAULT \'false\',' +
      'greetPrivateMessage BLOB,' +
      'farewell TEXT UNIQUE,' +
      'farewellMessage BLOB,' +
      'farewellTimeout INTEGER NOT NULL DEFAULT 15,' +
      'log TEXT UNIQUE,' +
      'musicTextChannelID TEXT UNIQUE,' +
      'musicVoiceChannelID TEXT UNIQUE,' +
      'musicMasterRoleID TEXT UNIQUE,' +
      'filterInvite TEXT NOT NULL DEFAULT \'false\',' +
      'filterLink TEXT NOT NULL DEFAULT \'false\',' +
      'whitelistDomains TEXT NOT NULL DEFAULT \'[]\',' +
      'filterWord TEXT NOT NULL DEFAULT \'false\',' +
      'filteredWords TEXT NOT NULL DEFAULT \'[]\',' +
      'chat TEXT NOT NULL DEFAULT \'false\',' +
      'levelUpMessage TEXT NOT NULL DEFAULT \'false\',' +
      'selfAssignableRoles TEXT NOT NULL DEFAULT \'[]\',' +
      'autoAssignableRoles TEXT NOT NULL DEFAULT \'[]\',' +
      'warnAction TEXT,' +
      'modLog TEXT UNIQUE,' +
      'modCaseNo TEXT NOT NULL DEFAULT \'1\',' +
      'PRIMARY KEY(guildID))').then(async () => {
        try {
          let bastionGuilds = Bastion.guilds.map(g => g.id);
          let guild = await Bastion.db.all('SELECT guildID from guildSettings');
          guild = guild.map(r => r.guildID);

          /*
          * Add guilds to the DB which added Bastion when it was offline.
          */
          for (let i = 0; i < bastionGuilds.length; i++) {
            let found = false;
            for (let j = 0; j < guild.length; j++) {
              if (bastionGuilds[i] === guild[j]){
                found = true;
                break;
              }
            }
            if (found === false) {
              await Bastion.db.run('INSERT INTO guildSettings (guildID) VALUES (?)', [ bastionGuilds[i] ]);
            }
          }

          /*
          * Remove guilds from DB which removed Bastion when it was offline.
          */
          for (let i = 0; i < guild.length; i++) {
            let found = false;
            for (let j = 0; j < bastionGuilds.length; j++) {
              if (guild[i] === bastionGuilds[j]){
                found = true;
                break;
              }
            }
            if (found === false) {
              await Bastion.db.run(`DELETE FROM guildSettings WHERE guildID=${guild[i]}`);
            }
          }
        }
        catch (e) {
          Bastion.log.error(e);
        }
      });

    await Bastion.db.run('CREATE TABLE IF NOT EXISTS blacklistedUsers' +
      '(userID TEXT NOT NULL UNIQUE,' +
      'PRIMARY KEY(userID))');

    await Bastion.db.run('CREATE TABLE IF NOT EXISTS profiles' +
      '(userID TEXT NOT NULL UNIQUE,' +
      'bastionCurrencies TEXT NOT NULL DEFAULT 0,' +
      'xp TEXT NOT NULL DEFAULT 0,' +
      'level TEXT NOT NULL DEFAULT 0,' +
      'reputation TEXT NOT NULL DEFAULT 0,' +
      'bio BLOB,' +
      'PRIMARY KEY(userID))');

    await Bastion.db.run('CREATE TABLE IF NOT EXISTS triggers' +
      '(trigger TEXT NOT NULL,' +
      'response TEXT NOT NULL)');

    await Bastion.db.run('CREATE TABLE IF NOT EXISTS todo' +
      '(ownerID TEXT NOT NULL UNIQUE,' +
      'list TEXT NOT NULL DEFAULT \'[]\')');

    await Bastion.db.run('CREATE TABLE IF NOT EXISTS bastionSettings' +
      '(log TEXT NOT NULL DEFAULT \'false\',' +
      'logChannelID TEXT UNIQUE)');

    await Bastion.db.run('CREATE TABLE IF NOT EXISTS scheduledCommands' +
      '(cronExp TEXT NOT NULL,' +
      'command TEXT NOT NULL,' +
      'channelID TEXT NOT NULL,' +
      'messageID TEXT NOT NULL,' +
      'arguments TEXT)');

    await Bastion.db.run('CREATE TABLE IF NOT EXISTS transactions' +
      '(userID TEXT NOT NULL,' +
      'type TEXT NOT NULL,' +
      'amount TEXT NOT NULL)');

    Bastion.log.console('\n');
    Bastion.log.console(COLOR.green('[Author] ') + Bastion.package.author);
    Bastion.log.console(COLOR.green('[Author URL] ') + Bastion.package.authorUrl);
    Bastion.log.console(COLOR.green('[Library] ') + Bastion.package.library);
    Bastion.log.console(`${COLOR.green('[Bot]')} Bastion v${Bastion.package.version}`);
    Bastion.log.console(COLOR.green('[Bot ID] ') + Bastion.credentials.botId);
    Bastion.log.console(COLOR.green('[Owner IDs] ') + Bastion.credentials.ownerId.join(', '));
    Bastion.log.console(COLOR.green('[Servers] ') + Bastion.guilds.size);
    Bastion.log.console(COLOR.green('[Prefix] ') + Bastion.config.prefix);
    Bastion.log.console(`${COLOR.cyan(`\n[${Bastion.user.username}]:`)} I'm ready to roll! o7`);
  }
  catch (e) {
    Bastion.log.error(e);
    process.exit(1);
  }
};
