---
title: C++
---

import Extension from '../../../static/Images/Extension.png';
import Select_c_option from '../../../static/Images/Select_C_option.png'

## Installing C++ on Windows

Follow these steps to install C++ on your Windows system:

**1. Download Visual Studio Code**
:::note

- If you already have visual studio code in your Operating System then ignore this step.
  :::
- **Visit the Website**: Go to [Visual Studio Code](https://code.visualstudio.com/Download).
- **Download**: Click on the "Download for Windows" button to get the installer.

**2. Install Visual Studio Code**

- **Run the Installer**: Open the downloaded `.exe` file and follow the on-screen instructions.
- **Customize Installation**: You can use the default settings or customize them if needed.
- **Finish**: Click "Install" and wait for the installation to complete, then click "Finish."

**3. Install the C++ Extension in VS Code (Common For all Operating Systems)**

- **Open VS Code**: Launch Visual Studio Code.
- **Go to Extensions**: Click on the Extensions icon on the left sidebar or press `Ctrl + Shift + X`.
- **Search for C++**: Type "C++" in the search box and look for the "C/C++" extension by Microsoft.
- **Install**: Click "Install" to add the extension to Visual Studio Code.

<img src={Extension} alt="First_step" style={{border: "2px solid", padding: "5px", borderRadius: "5px", width: "100%", height: "auto", maxWidth: "800px"}}/>

**4. Install MinGW (Minimalist GNU for Windows)**

- **Download MinGW**: Go to the [MinGW-w64 website](https://sourceforge.net/projects/mingw-w64/) and download the installer.
- **Run the Installer**: Launch the installer and follow the setup instructions.
- **Select Architecture**: Choose the appropriate architecture (e.g., x86_64 for 64-bit).
- **Installation Directory**: Select the installation directory (default is usually fine) and `Installation ⇨ Apply Changes`.
  <img src={Select_c_option} alt="First_step" style={{border: "2px solid", padding: "5px", borderRadius: "5px", width: "100%", height: "auto", maxWidth: "800px", margin:"5px 0 0 0 "}}/>
- **Complete Installation**: Finish the installation process.

**5. Add MinGW to System PATH**

- **Open System Properties**: Right-click on "This PC" or "Computer" on your desktop and select "Properties."
- **Advanced System Settings**: Click on "Advanced system settings" on the left sidebar.
- **Environment Variables**: Click the "Environment Variables" button.
- **Edit Path**: Under "System variables," find the "Path" variable, select it, and click "Edit."
- **Add New Path**: Click "New" and add the path to the `bin` directory of your MinGW installation (e.g., `C:\MinGW\bin`).
- **Save Changes**: Click "OK" to save your changes and close all windows.

**6. Verify Installation**

- **Open Command Prompt**: Press `Win + R`, type `cmd`, and press `Enter`.
- **Check GCC Version**: Type `gcc --version` and press `Enter`. If installed correctly, it should display the GCC version information.

**7. Write Your First C++ Program**

- **Create a New File**: In VS Code, go to `File > New File` and save it with a `.cpp` extension (e.g., `hello.cpp`).
- **Write Code**: Type a simple C++ program:

  ```cpp
  #include <iostream>
  int main() {
      std::cout << "Hello, World!" << std::endl;
      return 0;
  }
  ```

## Installing C++ on Linux & Ubuntu

Follow these steps to install C++ on your Linux or Ubuntu system:

#### **1. Update the Package List**

- **Open Terminal**: Press `Ctrl + Alt + T` to open the terminal.
- **Update Packages**: Run the following command to update the package list:

  ```bash
  sudo apt-get update
  ```

**2. Install the Build-Essential Package**

- **Install Build-Essential**: This package contains the essential tools for compiling software, including GCC (GNU Compiler Collection) and G++ (the C++ compiler):

  ```bash
  sudo apt-get install build-essential
  ```

- **Verify Installation**: After installation, you can verify the installation of GCC by running:

  ```bash
  gcc --version
  ```

  This should display the GCC version installed on your system.

**3. Install Additional Libraries (Optional)**

- **Standard C++ Library**: You can install the Standard C++ Library by running

  ```bash
  sudo apt-get install libstdc++6
  ```

- **Additional Libraries**: If you need additional libraries, you can install them using the apt-get install command.

**4. Write Your First C++ Program**

- **Create a New File**: Use a text editor like nano, vim, or gedit to create a new file with a `.cpp` extension:

  ```bash
  nano hello.cpp
  ```

- **Write Code**: Type a simple C++ program:
  ```cpp
  #include <iostream>
  int main() {
  std::cout << "Hello, World!" << std::endl;
  return 0;
  }
  ```
- **Save the File**: Save the file and exit the editor.

**5. Compile Your C++ Program**

- **Compile the Program:** Use the G++ compiler to compile your C++ program:

  ```bash
   g++ hello.cpp -o hello
  ```

- **Run the Program:** Execute the compiled program:
  ```bash
   ./hello
  ```
- You should see the output:

  ```bash
   Hello, World!
  ```

## Installing C++ on macOS

Follow these steps to install C++ on your macOS system:

**1. Install Homebrew**

- **Open Terminal**: Press `Cmd + Space`, type `Terminal`, and press `Enter`.
- **Install Homebrew**: Homebrew is a package manager for macOS. To install it, paste the following command in Terminal and press `Enter`:

  ```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```

**2. Install GCC (GNU Compiler Collection)**

- Install GCC: Once Homebrew is installed, use it to install GCC by running the following command in Terminal:

  ```bash
  brew install gcc
  ```

**3. Install Visual Studio Code**
:::note

- If you already have visual studio code in your Operating System then ignore this step.
  :::

- **Download VS Code:** Visit the [Visual Studio Code](https://code.visualstudio.com/Download) website.
- **Download for macOS:** Click on the "Download for macOS" button to get the installer.
- **Install:** Open the downloaded .zip file, move Visual Studio Code to the Applications folder, and launch it.

**4. Install the C++ Extension in VS Code**

- **Open VS Code:** Launch Visual Studio Code.
- **Go to Extensions:** Click on the Extensions icon on the left sidebar or press Cmd + Shift + X.
- **Search for C++:** Type "C++" in the search box and look for the "C/C++" extension by Microsoft.
- **Install:** Click "Install" to add the extension to Visual Studio Code.

**5. Set Up the Environment**

- **Link GCC:** On macOS, you may need to create a symlink to make g++ point to the Homebrew-installed version of GCC. Run:

  ```bash
  sudo ln -s /usr/local/bin/g++-<version> /usr/local/bin/g++
  ```

  - Replace < version > with the GCC version installed (e.g., `12` for `g++-12`)

**6. Verify Installation**

- **Check GCC Version:** Open Terminal and type:
  ```bash
  g++ --version
  ```
  - This should display the version of GCC installed.

**7. Write Your First C++ Program**

- **Create a New File:** In VS Code, go to File > New File and save it with a .cpp extension (e.g., hello.cpp).
- **Write Code:** Type a simple C++ program:

  ```cpp
  #include <iostream>
  int main() {
      std::cout << "Hello, World!" << std::endl;
      return 0;
  }
  ```

- **Compile and Run:** In the Terminal within VS Code or your macOS Terminal, navigate to the directory where your file is saved and run:
  ```bash
  g++ -o hello hello.cpp
  ./hello
  ```
  - This will compile your code and run the resulting program, printing "Hello, World!" to the Terminal.