
# Iris Assistant Template

This repository contains the code for Iris Assistant, an all-in-one Discord bot designed to enhance your server experience. With a wide range of commands and useful features, it aims to provide a seamless and enjoyable Discord environment.

## Installation

To use Iris Assistant, please follow these steps:

1. Clone this repository to your local machine or download the code as a ZIP file.
2. Install the required dependencies by running the following command:

```shell
npm install
```
3. Create a config.json file in the root directory of the project and fill in the necessary details. The format should be as follows:
```json
{
    "token": "Your Token Here",
    "mongo": "Your Mongo Uri",
    "clientId": "Your Bot Id"
}
```
## Make sure to replace "Your Token Here", "Your Mongo Uri", and "Your Bot Id" with your actual token, MongoDB URI, and bot ID, respectively.

## How to run Bot

Start the bot by running the following command:
```js
node index.js
or
node .
```
## Command Format

To create a new command, follow the code format below:

```js
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('name of command')
    .setDescription('description of command'),
  async execute(interaction) {
    try {
      // Functionality of the command goes here
    } catch (error) {
      console.error('Error while executing command:', error);
    }
  },
};

```

## Replace 'name of command' with the desired name for your command and 'description of command' with a brief description of what the command does. The functionality of the command should be implemented within the execute method.

# Feedback and Issues

## [If you encounter any issues or have suggestions for improvement, please feel free to open an issue here](https://github.com/DevanshxDop/Iris-Assistant-Template/issues).

# License

# This project is licensed under the terms of the [LICENSE](https://github.com/DevanshxDop/Iris-Assistant-template/blob/main/LICENSE) file. For more details, refer to the license file.
