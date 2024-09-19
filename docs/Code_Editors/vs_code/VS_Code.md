---
title: Visual Studio Code
description: ""
sidebar_position: 1
---

# How to Download and setup vs code ?


## Table of Contents

- [How to Download and setup vs code ?](#how-to-download-and-setup-vs-code-)
  - [Table of Contents](#table-of-contents)
  - [Download and Install](#download-and-install)
  - [Add to PATH (Optional)](#add-to-path-optional)
  - [Launch Visual Studio Code](#launch-visual-studio-code)
  - [Additional Resources](#additional-resources)

---

## Download and Install

1. **Download Visual Studio Code:**

   - Visit the official [Visual Studio Code Download Page](https://code.visualstudio.com/Download).
   - Select your operating system (Windows, macOS, or Linux) to download the appropriate installer.

2. **Install Visual Studio Code:**
   - **Windows:** Run the downloaded `.exe` file and follow the setup wizard.
   - **macOS:** Open the downloaded `.zip` file and drag the **Visual Studio Code** app to the `Applications` folder.
   - **Linux:**
     - For **Debian/Ubuntu**:
       ```bash
       sudo apt update
       sudo apt install software-properties-common apt-transport-https wget
       wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
       sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
       sudo apt update
       sudo apt install code
       ```

## Add to PATH (Optional)

- **Windows:** During installation, you can select the option to add Visual Studio Code to your system's `PATH`.
- **macOS:**
  - Open Visual Studio Code.
  - Press `Cmd+Shift+P` to open the Command Palette.
  - Type `shell command` and select **Install 'code' command in PATH**.
- **Linux:** If not added automatically, you can add Visual Studio Code to the `PATH` using your shell's configuration file.

## Launch Visual Studio Code

- **Windows/macOS/Linux:** After installation, you can launch Visual Studio Code:
  - From the Start menu (Windows), `Applications` folder (macOS), or application menu (Linux).
  - Or, open the terminal and type:
    ```bash 
    code
    ```

## Additional Resources

- **Extensions Marketplace:** Enhance your coding experience by exploring the [VS Code Extensions Marketplace](https://marketplace.visualstudio.com/vscode).
- **Documentation:** Check out the official [VS Code Documentation](https://code.visualstudio.com/docs) for more in-depth tutorials and guides.
- **Community Support:** Join the [Visual Studio Code Community](https://code.visualstudio.com/community) to connect with other developers.

**<center><i>Thanks for Visiting!</i>😊</center>**
