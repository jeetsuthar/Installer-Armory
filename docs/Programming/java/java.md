---
title: Java
sidebar_position: 2
description: ""
---

# Programming With Java

This guide provides step-by-step instructions to install Java on **Windows**, **Linux**, and **macOS**.

## Windows Installation

### 1. Download Java

- Visit the [official Java download page](https://www.oracle.com/java/technologies/javase-downloads.html).
- Under **Java SE (Standard Edition)**, select the latest JDK version (e.g., JDK 20).
- Click on the **Windows** installer link (`.exe`).

### 2. Run the Installer

- Double-click the `.exe` file to start the installation.
- Follow the prompts, leaving the default settings as they are. Click **Next** until the installation begins.

### 3. Set Up Environment Variables

- **Right-click** on `This PC` or `Computer` and select **Properties**.
- Click on **Advanced system settings** > **Environment Variables**.
- Under **System variables**, click **New** and set `JAVA_HOME` to the path of the Java installation directory (e.g., `C:\Program Files\Java\jdk-20`).
- Edit the `Path` variable and add `%JAVA_HOME%\bin`.

### 4. Verify Installation

- Open the **Command Prompt**.
- Type `java -version` and press **Enter**. The Java version should be displayed.

---

## Linux Installation

### 1. Download Java

- Go to the [official Java download page](https://www.oracle.com/java/technologies/javase-downloads.html).
- Select the latest JDK version (e.g., JDK 20) and download the `.tar.gz` file.

### 2. Install Java

- Open the **Terminal** and navigate to the downloaded file's directory.
- Extract the file with:
  ```bash
  tar -xvzf jdk-20_linux-x64_bin.tar.gz
  ```
- Move the extracted folder to `/opt`:
  ```bash
  sudo mv jdk-20 /opt/
  ```
- Set up **JAVA_HOME** by adding the following to `.bashrc` or `.bash_profile`:
  ```bash
  export JAVA_HOME=/opt/jdk-20
  export PATH=$JAVA_HOME/bin:$PATH
  ```
- Apply the changes with:
  ```bash
  source ~/.bashrc
  ```

### 3. Verify Installation

- Open a new Terminal window.
- Type `java -version` and press **Enter**. The Java version should be displayed.

---

## macOS Installation

### 1. Download Java

- Go to the [official Java download page](https://www.oracle.com/java/technologies/javase-downloads.html).
- Download the latest JDK `.dmg` file for macOS.

### 2. Install Java

- Double-click the `.dmg` file and follow the installation prompts.
- Set up **JAVA_HOME**:
  - Open Terminal and run:
    ```bash
    /usr/libexec/java_home -V
    ```
  - Copy the JDK path and add the following to `.zshrc`, `.bash_profile`, or `.zprofile`:
    ```bash
    export JAVA_HOME=$(/usr/libexec/java_home -v <jdk_version>)
    export PATH=$JAVA_HOME/bin:$PATH
    ```
  - Replace `<jdk_version>` with the version number you installed.
  - Apply the changes with:
    ```bash
    source ~/.zshrc  # or source ~/.bash_profile
    ```

### 3. Verify Installation

- Open Terminal.
- Type `java -version` and press **Enter**. The Java version should be displayed.

---

**Note:** These steps should ensure Java is installed and ready to use on your system.

<center><i>Thank you for visiting!</i></center>