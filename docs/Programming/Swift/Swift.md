---
title: Swift 
description: ""
---

# Programming with Swift 

This guide provides step-by-step instructions to install Swift on **Windows**, **Linux**, and **macOS**.

## Windows Installation

### 1. Install Windows Subsystem for Linux (WSL)
Swift doesn’t run natively on Windows. It requires WSL to run within a Linux environment on Windows.

- Open **PowerShell** as an administrator.
- Run the following command:
  ```bash
  wsl --install
  ```
- Once installed, restart your computer if prompted.

### 2. Install Swift on WSL
- Open **WSL** (Ubuntu).
- Update package lists with:
  ```bash
  sudo apt update
  sudo apt upgrade
  ```
- Install the required dependencies:
  ```bash
  sudo apt install clang libicu-dev
  ```
- Download Swift from the [official Swift website](https://swift.org/download/), selecting the latest stable release for Ubuntu.
- Install Swift by running:
  ```bash
  tar -xvzf swift-<version>-ubuntu.tar.gz
  sudo mv swift-<version>-ubuntu /usr/share/swift
  echo "export PATH=/usr/share/swift/usr/bin:$PATH" >> ~/.bashrc
  source ~/.bashrc
  ```

### 3. Verify Installation
- Open a new **WSL** Terminal window.
- Run `swift --version`. The installed Swift version should be displayed.

---

## Linux Installation

### 1. Download Swift
- Visit the [official Swift download page](https://swift.org/download/).
- Download the latest Swift release for Linux (.tar.gz).

### 2. Install Swift
- Open the **Terminal** and navigate to the directory where the file was downloaded.
- Extract the Swift file:
  ```bash
  tar -xvzf swift-<version>-ubuntu.tar.gz
  ```
- Move the extracted folder to `/usr/share`:
  ```bash
  sudo mv swift-<version>-ubuntu /usr/share/swift
  echo "export PATH=/usr/share/swift/usr/bin:$PATH" >> ~/.bashrc
  source ~/.bashrc
  ```

### 3. Verify Installation
- Open a new Terminal window.
- Run `swift --version`. The Swift version should be displayed.

---

## macOS Installation

### 1. Install Xcode (Recommended)
Swift comes pre-installed with **Xcode**, the official IDE for Swift development.

- Visit the [Mac App Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12) and download **Xcode**.
- Open Xcode and go to **Preferences** > **Locations**, then set the Command Line Tools to the latest Xcode version.

### 2. Alternative: Install Swift via Homebrew
If you don’t want to use Xcode, you can install Swift via **Homebrew**.

- Install Homebrew (if not installed):
  ```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```
- Install Swift:
  ```bash
  brew install swift
  ```

### 3. Verify Installation
- Open **Terminal**.
- Run `swift --version`. The Swift version should be displayed.

---

**Note:** Follow these steps to set up Swift for development on any of the platforms listed above.

<center><i>Thank you for visiting!</i></center>
