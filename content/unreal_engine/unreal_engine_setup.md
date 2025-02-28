---
title: Unreal Engine Setup
date: 2025-02-28T19:28:24+08:00
tags: []
series: []
featured: true
---
 
# Chapter 1: Unreal Engine Setup

## 1.1 Installation

### 1.1.1 Installation on Windows or macOS
1. Download the installer for Epic Games Launcher from the [Unreal Engine's official website](https://www.unrealengine.com/en-us/download).
2. Install Epic Games Launcher by running the installer.
3. If you fail to install the launcher, you may try other reliable sources, such as Microsoft Store on Windows.
4. After running the Launcher, sign up for an Epic Games account if you don't have one (an account is required to use Unreal Engine).
5. Sign in to the Epic Games Launcher.
6. Install Unreal Engine inside the Epic Games Launcher.

### 1.1.2 Installation on Linux
The Epic Games Launcher is not available on Linux, but precompiled builds or source code builds of Unreal Engine can be used.

To build Unreal Engine from Source, refer to this link: [Downloading Unreal Engine Source Code](https://dev.epicgames.com/documentation/en-us/unreal-engine/downloading-unreal-engine-source-code?application_version=5.3).

To use a precompiled build:
1. Open the [Unreal Engine for Linux webpage](https://www.unrealengine.com/en-US/linux).
2. Sign in or create an Epic Games account.
3. Download the .zip file containing Unreal Engine 5.3 or another version.
4. Unzip the contents to your desired installation directory.
5. Run `Engine/Binaries/Linux/UnrealEditor` from the Terminal to launch Unreal Engine.

### 1.1.3 Changing the Installation Location or Registering an Installation
1. Open the Epic Games Launcher.
2. Click the Unreal Engine tab on the left sidebar, then click the Library tab.
3. Click the (+) button beside "ENGINE VERSIONS."
4. Select the version you need to move or register.
5. Click the Browse button to choose the new location.
6. (Optional) Click the Options button to configure engine components.
7. Wait for the installation to start, then click Cancel (X).
8. Move files from the original location to the new location.
9. Click the Resume button to complete the installation.

### 1.1.4 Tips on Storage Management
- If your system drive is low on storage, consider moving the installation to another drive.
- Alternatively, move directories that grow significantly to another drive.

## 1.2 Hardware and Software Specifications of Unreal Engine 5.3

### 1.2.1 Recommended Hardware
- **Processor**: Apple Silicon M3, or Quad-core Intel or AMD (2.5 GHz or faster)
- **Memory**: 16 GB or more
- **Video RAM**: 8 GB or more

### 1.2.2 Minimum Software Requirements
- **Windows**:
  - Operating System: Windows 10
  - DirectX Runtime: [DirectX End-User Runtimes (June 2010)](https://www.microsoft.com/en-us/download/details.aspx?id=8109)
- **macOS**:
  - Recommended: Latest macOS 13 Ventura
  - Minimum: macOS 12.5 Monterey
- **Linux**:
  - Operating System: CentOS 7.x or newer
  - Linux Kernel Version: 3.x or newer
  - Additional Dependencies: glibc 2.17 or newer (2.35 or better)
