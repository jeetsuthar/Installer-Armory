---
title: C/C++
---

# Programming With C++

This guide provides step-by-step instructions to install C++ on **Windows**, **Linux**, and **macOS**.

## Windows Installation

:::tip
[Download and Install Visual Studio Code](/docs/Code_Editors/vs_code/VS_Code.md).
:::

### 1. Install C++ Extension in VS Code

- Open VS Code and Go to **Extensions** (`Ctrl + Shift + X`).
- Search for **" C/C++"** by Microsoft and click **Install**.

### 2. Install MinGW

- Go to the [MinGW-w64 website](https://sourceforge.net/projects/mingw-w64/) and download the installer.
- Run the installer, choose the default settings, and complete the installation.

### 3. Add MinGW to PATH

- Right-click on "This PC" or "Computer" on your desktop and select **Properties**.
- Click **Advanced system settings**, then **Environment Variables**.
- In "System variables", select "Path" and click **Edit**.
- Add `C:\MinGW\bin` to the list and click **OK**.

### 4. Verify Installation

- Open Command Prompt (`Win + R`, type `cmd`, press Enter).
- Type `gcc --version` and press Enter to check the installation.

---

## Linux Installation

### 1. Update System packages

- **Open Terminal** (Press `Ctrl + Alt + T`).
- Update system packages:

```bash
  sudo apt-get update
```

### 2. Install C++ Tools

- Install the necessary tools with :

```bash
# This command installs essential build tools like gcc and g++ for compiling C++ programs.
sudo apt-get install build-essential
```

### 3. Write and Run a simple Program

- create a file `(e.g. example.cpp )` and Add this code.

```cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}

```

- Compile and run the program.

```bash
g++ example.cpp -o example
./hello
```

---

## macOS Installation

### 1. Install Homebrew

- **Open Terminal** (Press `Cmd + Space`, type `Terminal`, and press Enter).
- Install Homebrew (a package manager for macOS) if it's not already installed:

```bash
  # Note: You might need to provide your administrator password during this process.
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 2. Install GCC

- In Terminal, type the following command to install the GCC compiler :

```bash
brew install gcc
```

### 3. Verify GCC Installation

```bash
g++ --version
```

---

**Note:** These steps should ensure C++ is installed and ready to use on your system.

<center><i>Thank you for visiting!</i></center>
