---
title: Kotlin 
description: ""
---

# Programming With Kotlin 

This guide provides step-by-step instructions to install Kotlin on **Windows**, **Linux**, and **macOS**.

## Windows Installation

### 1. Install IntelliJ IDEA (Recommended IDE)
Kotlin is most commonly used with **IntelliJ IDEA**, which provides excellent support for Kotlin development.

- Visit the [official IntelliJ IDEA download page](https://www.jetbrains.com/idea/download/).
- Download the **Windows** version and install it.
- Launch IntelliJ IDEA, and during the first startup, choose the option to install the **Kotlin** plugin.

### 2. Install Kotlin via SDKMAN (Alternative)
If you prefer to work with Kotlin via the command line, you can use **SDKMAN** to install Kotlin.

- Download and install **SDKMAN** by running the following command in **PowerShell**:
  ```bash
  curl -s "https://get.sdkman.io" | bash
  source "$HOME/.sdkman/bin/sdkman-init.sh"
  ```
- Install Kotlin using SDKMAN:
  ```bash
  sdk install kotlin
  ```

### 3. Verify Installation
- Open **Command Prompt**.
- Run `kotlinc -version`. The installed Kotlin version should be displayed.

---

## Linux Installation

### 1. Install SDKMAN
SDKMAN is the easiest way to install Kotlin on Linux.

- Open the **Terminal** and install SDKMAN:
  ```bash
  curl -s "https://get.sdkman.io" | bash
  source "$HOME/.sdkman/bin/sdkman-init.sh"
  ```
- Install Kotlin:
  ```bash
  sdk install kotlin
  ```

### 2. Verify Installation
- Open a new Terminal window.
- Run `kotlinc -version`. The installed Kotlin version should be displayed.

---

## macOS Installation

### 1. Install SDKMAN
SDKMAN is also the easiest method for installing Kotlin on macOS.

- Open **Terminal** and install SDKMAN:
  ```bash
  curl -s "https://get.sdkman.io" | bash
  source "$HOME/.sdkman/bin/sdkman-init.sh"
  ```
- Install Kotlin:
  ```bash
  sdk install kotlin
  ```

### 2. Alternative: Install Kotlin via Homebrew
If you prefer, you can install Kotlin using **Homebrew**.

- Install Homebrew (if not installed):
  ```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```
- Install Kotlin:
  ```bash
  brew install kotlin
  ```

### 3. Verify Installation
- Open a new Terminal window.
- Run `kotlinc -version`. The installed Kotlin version should be displayed.

---

**Note:** Follow these steps to set up Kotlin for development on any platform. You can choose between IntelliJ IDEA or the command line for your preferred workflow.

<center><i>Thank you for visiting!</i></center>
