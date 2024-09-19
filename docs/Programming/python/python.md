---
title: Python
sidebar_position: 1
description: ""
---
# Programming With Python

This guide provides step-by-step instructions to install Python on **Windows**, **Linux**, and **macOS**.

## Windows Installation

### 1. Download Python

- Visit the [Python Downloads page](https://www.python.org/downloads/windows/).
- Click on the latest Python release (e.g., `Python 3.x.x`) under the “Stable Releases” section.
- Scroll down to the “Files” section and select the **Windows Installer (64-bit)** or **Windows Installer (32-bit)** depending on your system.

### 2. Run and Installer

- Double-click the `python-3.x.x-amd64.exe` file to start the installation.
- **Check the box** that says **“ Add Python 3.x to PATH ”** at the bottom.
- Click on **“ Customize installation ”** if you want to select specific features or install Python for all users (recommended for experts).
- Otherwise, click on **“ Install Now ”** for a default installation.
- Click on **“ Install ”**. The installer will begin installing Python along with `pip`, `IDLE`, and other essential tools.
- Once the installation is complete, click on **“ Close ”**.

### 3. Verify Installation

- Open the Command Prompt ( Press `Win + R`, type `cmd`, and hit Enter ).
- Type `python --version` or `python` in the Command Prompt and press Enter.
- Type `pip --version` and press Enter to confirm that `pip` is installed correctly.

<strong>Video</strong> : [Python Installation in windows](https://youtu.be/TNAu6DvB9Ng?si=LXreuQVFDRY7HnII)

---

## Linux Installation

### 1. Update System

- **Open Terminal** (Press `Ctrl + Alt + T`).
- Update system packages:

```bash
  sudo apt update
```

### 2. Install Python

- Install Python and pip :

```bash
  sudo apt install python3 python3-pip
```

### 3. Verify Installation

- Check Python version :

```bash
  python3 --version
```

- Check pip version :

```bash
  pip3 --version
```

---

## macOS Installation

### 1. Install Homebrew

- **Open Terminal** (Press `Cmd + Space`, type `Terminal`, and press Enter).
- Install Homebrew (a package manager for macOS) if it's not already installed:

```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 2. Install Python

- Install Python using Homebrew :

```bash
brew install python
```

### 3. Verify Installation

- Check Python and pip version :

```bash
python3 --version
pip3 --version
```
---
**Note:** These steps should ensure python is installed and ready to use on your system.

<center><i>Thank you for visiting!</i></center>
